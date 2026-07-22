import { open, readFile, readdir, stat } from "node:fs/promises";
import { extname, relative, resolve, sep } from "node:path";

const siteOrigin = "https://123-abc.pro";
const assetValuePattern = /\.(?:css|gif|html?|jpe?g|js|json|mp3|mp4|png|svg|vtt|webp|woff2?)(?:[?#]|$)/i;
const ignoredReferencePattern = /^(?:#|blob:|data:|javascript:|mailto:|tel:)/i;

function posixPath(path) {
  return path.split(sep).join("/");
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve(directory, entry.name);
      if (entry.isDirectory()) return filesUnder(entryPath);
      return entry.isFile() ? [entryPath] : [];
    }),
  );
  return nestedFiles.flat();
}

function matchesFrom(text, pattern) {
  pattern.lastIndex = 0;
  return [...text.matchAll(pattern)].map((match) => match[1].trim());
}

function htmlReferences(text) {
  const attributes = matchesFrom(
    text,
    /\b(?:href|poster|src)\s*=\s*["']([^"']+)["']/gi,
  );
  const sourceSets = matchesFrom(
    text,
    /\bsrcset\s*=\s*["']([^"']+)["']/gi,
  ).flatMap((value) => value.split(",").map((entry) => entry.trim().split(/\s+/)[0]));
  const inlineValues = matchesFrom(
    text,
    /(?:captionURL|exitURL|mp4URL|mp4VideoURL|poster|transcriptLink)\s*:\s*["']([^"']+)["']/gi,
  );
  return [...attributes, ...sourceSets, ...inlineValues];
}

function stylesheetReferences(text) {
  return matchesFrom(text, /url\(\s*["']?([^"')]+)["']?\s*\)/gi);
}

function jsonStrings(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(jsonStrings);
  if (!value || typeof value !== "object") return [];
  return Object.values(value).flatMap(jsonStrings);
}

function atlasFrameNames(payload) {
  if (!payload || typeof payload !== "object" || !("frames" in payload)) return new Set();
  if (Array.isArray(payload.frames)) {
    return new Set(
      payload.frames
        .map((frame) => frame?.filename)
        .filter((filename) => typeof filename === "string"),
    );
  }
  if (payload.frames && typeof payload.frames === "object") {
    return new Set(Object.keys(payload.frames));
  }
  return new Set();
}

function jsonReferences(text, sourceFile) {
  try {
    const payload = JSON.parse(text);
    const frameNames = atlasFrameNames(payload);
    const references = jsonStrings(payload).filter(
      (value) => assetValuePattern.test(value) && !frameNames.has(value),
    );
    return { references };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { references: [], issue: { sourceFile, reason: "invalid-json", detail: message } };
  }
}

function candidatePaths(pathname) {
  const relativePath = pathname.replace(/^\/+/, "");
  if (!relativePath) return ["index.html"];
  if (pathname.endsWith("/")) return [`${relativePath}index.html`];
  if (extname(relativePath)) return [relativePath];
  return [relativePath, `${relativePath}.html`, `${relativePath}/index.html`];
}

function resolveReference(sourceFile, reference, availablePaths) {
  if (!reference || ignoredReferencePattern.test(reference)) return null;
  let resolvedUrl;
  try {
    resolvedUrl = new URL(reference, new URL(`/${sourceFile}`, siteOrigin));
  } catch (error) {
    return { sourceFile, reference, reason: "invalid-url", detail: String(error) };
  }
  if (resolvedUrl.origin !== siteOrigin) {
    return { sourceFile, reference, reason: "external-reference", target: resolvedUrl.origin };
  }
  if (resolvedUrl.pathname === "/") return null;
  const candidates = candidatePaths(decodeURIComponent(resolvedUrl.pathname));
  if (candidates.some((candidate) => availablePaths.has(candidate))) return null;
  return { sourceFile, reference, reason: "missing-reference", target: candidates.join(" | ") };
}

async function leadingBytes(path, count = 16) {
  const file = await open(path, "r");
  try {
    const buffer = Buffer.alloc(count);
    const result = await file.read(buffer, 0, count, 0);
    return buffer.subarray(0, result.bytesRead);
  } finally {
    await file.close();
  }
}

function hasValidSignature(extension, bytes) {
  const signatures = {
    ".gif": () => bytes.subarray(0, 6).toString("ascii") === "GIF87a" || bytes.subarray(0, 6).toString("ascii") === "GIF89a",
    ".jpg": () => bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff,
    ".jpeg": () => bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff,
    ".mp3": () => bytes.subarray(0, 3).toString("ascii") === "ID3" || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0),
    ".mp4": () => bytes.subarray(4, 8).toString("ascii") === "ftyp",
    ".png": () => bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
    ".webp": () => bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP",
    ".woff": () => bytes.subarray(0, 4).toString("ascii") === "wOFF",
    ".woff2": () => bytes.subarray(0, 4).toString("ascii") === "wOF2",
  };
  return signatures[extension]?.() ?? true;
}

async function signatureIssue(absolutePath, sourceFile) {
  const details = await stat(absolutePath);
  if (details.size === 0) return { sourceFile, reason: "empty-file" };
  const extension = extname(sourceFile).toLowerCase();
  const bytes = await leadingBytes(absolutePath);
  if (hasValidSignature(extension, bytes)) return null;
  return { sourceFile, reason: "invalid-file-signature", target: extension };
}

async function referencesForFile(absolutePath, sourceFile) {
  const extension = extname(sourceFile).toLowerCase();
  if (![".css", ".htm", ".html", ".json"].includes(extension)) return { references: [] };
  const text = await readFile(absolutePath, "utf8");
  if (extension === ".css") return { references: stylesheetReferences(text) };
  if (extension === ".json") return jsonReferences(text, sourceFile);
  return { references: htmlReferences(text) };
}

async function assertDirectory(root) {
  let details;
  try {
    details = await stat(root);
  } catch (error) {
    if (error?.code === "ENOENT") throw new Error(`Static root does not exist: "${root}"`);
    throw error;
  }
  if (!details.isDirectory()) throw new Error(`Static root is not a directory: "${root}"`);
}

export async function auditStaticAssets(rootPath) {
  const root = resolve(rootPath);
  await assertDirectory(root);
  const absoluteFiles = await filesUnder(root);
  const relativeFiles = absoluteFiles.map((path) => posixPath(relative(root, path)));
  const availablePaths = new Set(relativeFiles);
  const issues = [];
  let inspectedReferences = 0;

  for (const [index, absolutePath] of absoluteFiles.entries()) {
    const sourceFile = relativeFiles[index];
    const signature = await signatureIssue(absolutePath, sourceFile);
    if (signature) issues.push(signature);
    const extracted = await referencesForFile(absolutePath, sourceFile);
    if (extracted.issue) issues.push(extracted.issue);
    inspectedReferences += extracted.references.length;
    for (const reference of extracted.references) {
      const issue = resolveReference(sourceFile, reference, availablePaths);
      if (issue) issues.push(issue);
    }
  }

  return {
    root,
    files: absoluteFiles.length,
    documents: relativeFiles.filter((path) => /[.]html?$/.test(path)).length,
    inspectedReferences,
    issues,
  };
}
