import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import test from "node:test";

const exportDirectory = join(process.cwd(), "out");
const siteOrigin = "https://123-abc.pro";

const SPEC_ALLOWED_PATHS = ["/", "/llms.txt", "/llms-full.txt"];
const SPEC_DISALLOWED_PATHS = ["/cdn-cgi/"];

// The expected AI crawler list from the round-B contract. The single production
// constant lives in src/config/discovery.ts; this list is the specification the
// built robots.txt is checked against.
const SPEC_AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Google-CloudVertexBot",
  "Applebot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Meta-WebIndexer",
  "FacebookBot",
  "Amazonbot",
  "CCBot",
  "Bytespider",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "AI2Bot",
  "Diffbot",
  "Timpibot",
  "omgili",
  "Gemini-Deep-Research",
  "Google-NotebookLM",
  "GoogleAgent-URLContext",
  "DeepSeekBot",
  "ChatGLM-Spider",
  "DoubaoBot",
  "Kimi-SearchBot",
  "Kimi-User",
  "KimiBot",
  "QwenBot",
  "TongyiBot",
  "YiyanBot",
  "ERNIEBot",
  "PanguBot",
  "MistralAI-Index",
  "Amzn-SearchBot",
  "Bravebot",
  "PhindBot",
];

function parseRobots(text) {
  const groups = [];
  let current = null;
  let seenRule = false;
  for (const raw of text.split("\n")) {
    const line = raw.split("#", 1)[0].trim();
    if (!line || !line.includes(":")) continue;
    const [rawKey, ...rest] = line.split(":");
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (key === "user-agent") {
      if (current === null || seenRule) {
        current = { agents: [], allow: [], disallow: [] };
        groups.push(current);
        seenRule = false;
      }
      current.agents.push(value);
    } else if (key === "allow" || key === "disallow") {
      seenRule = true;
      current[key].push(value);
    }
  }
  return groups;
}

function robotsLines(text) {
  return text
    .split("\n")
    .map((line) => line.split("#", 1)[0].trim())
    .filter(Boolean);
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(entryPath)));
    else if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

async function exportedPaths() {
  const paths = new Set();
  for (const file of await filesUnder(exportDirectory)) {
    const relativePath = relative(exportDirectory, file).split(sep).join("/");
    paths.add(`/${relativePath}`);
    if (relativePath === "index.html") paths.add("/");
    if (relativePath.endsWith("/index.html")) {
      paths.add(`/${relativePath.slice(0, -"index.html".length)}`);
    }
  }
  return paths;
}

function markdownLinks(body) {
  return [...body.matchAll(/\[[^\]]+\]\((https?:\/\/[^)\s]+)\)/g)].map(
    (match) => match[1],
  );
}

test("robots.txt keeps one * group and one named AI group with identical rules", async () => {
  const robots = await readFile(join(exportDirectory, "robots.txt"), "utf8");
  const groups = parseRobots(robots);

  const wildcard = groups.filter((group) => group.agents.includes("*"));
  assert.equal(wildcard.length, 1, "exactly one User-agent: * group");

  const aiGroups = groups.filter((group) =>
    group.agents.some((agent) => agent !== "*"),
  );
  assert.equal(aiGroups.length, 1, "exactly one named AI crawler group");

  const [star] = wildcard;
  const [ai] = aiGroups;
  assert.deepEqual(
    ai.agents,
    SPEC_AI_CRAWLERS,
    "the named group lists every AI crawler, in contract order",
  );
  assert.deepEqual(
    [...ai.allow].sort(),
    [...star.allow].sort(),
    "AI group Allow must repeat the * group (RFC 9309: no inheritance)",
  );
  assert.deepEqual(
    [...ai.disallow].sort(),
    [...star.disallow].sort(),
    "AI group Disallow must repeat the * group (RFC 9309: no inheritance)",
  );
  assert.deepEqual([...star.allow], SPEC_ALLOWED_PATHS);
  assert.deepEqual([...star.disallow], SPEC_DISALLOWED_PATHS);
  assert.equal(new Set(SPEC_AI_CRAWLERS).size, SPEC_AI_CRAWLERS.length);
});

test("robots.txt keeps render assets crawlable and the site open", async () => {
  const robots = await readFile(join(exportDirectory, "robots.txt"), "utf8");
  const disallowed = robotsLines(robots)
    .filter((line) => /^disallow:/i.test(line.replace(/\s+/g, " ")))
    .map((line) => line.split(":").slice(1).join(":").trim());

  for (const rule of disallowed) {
    assert.doesNotMatch(rule, /^\/_next/, `/_next must stay crawlable (${rule})`);
    assert.doesNotMatch(rule, /\/(?:static|images)\//, `static assets must stay crawlable (${rule})`);
    assert.doesNotMatch(rule, /\.(?:js|css)$/, `assets must stay crawlable (${rule})`);
    assert.doesNotMatch(rule, /\.json\$?$/, `JSON must stay crawlable (${rule})`);
    assert.notEqual(rule, "/", "the whole site must stay crawlable");
  }
});

test("robots.txt allows the llms files and declares the canonical sitemap", async () => {
  const robots = await readFile(join(exportDirectory, "robots.txt"), "utf8");

  assert.match(robots, /^Allow: \/llms\.txt$/m);
  assert.match(robots, /^Allow: \/llms-full\.txt$/m);
  assert.match(robots, /^Sitemap: https:\/\/123-abc\.pro\/sitemap\.xml$/m);
  assert.doesNotMatch(robots, /Crawl-delay/i);
});

test("llms.txt follows the llmstxt.org shape", async () => {
  const body = await readFile(join(exportDirectory, "llms.txt"), "utf8");
  const lines = body.split("\n");
  const firstContent = lines.find((line) => line.trim() !== "");
  const headings = lines.filter((line) => line.startsWith("# "));
  const sections = lines.filter((line) => line.startsWith("## ")).map((line) => line.slice(3).trim());

  assert.equal(firstContent, "# 123 ABC Pro");
  assert.equal(headings.length, 1, "exactly one H1");
  assert.ok(
    lines.slice(0, 15).some((line) => line.startsWith("> ")),
    "the blockquote summary follows the H1",
  );
  assert.ok(sections.length >= 3, `expected H2 sections, received ${sections.join(", ")}`);
  if (sections.includes("Optional")) {
    assert.equal(sections.at(-1), "Optional", "## Optional must be last");
  }
  assert.doesNotMatch(body, /<[a-z][^>]*>/i, "no HTML in llms.txt");
  assert.doesNotMatch(body, /[?&](?:utm_|sn=)/, "no tracking or session parameters");

  const links = markdownLinks(body);
  assert.ok(links.length >= 10 && links.length <= 40, `expected 10-40 links, received ${links.length}`);
});

test("llms.txt links are canonical and resolve to exported pages", async () => {
  const body = await readFile(join(exportDirectory, "llms.txt"), "utf8");
  const paths = await exportedPaths();
  const links = markdownLinks(body);

  for (const link of links) {
    const url = new URL(link);
    assert.equal(url.origin, siteOrigin, `${link} must use the canonical host`);
    assert.equal(url.search, "", `${link} must not carry a query string`);
    assert.equal(url.hash, "", `${link} must not carry a fragment`);
    assert.ok(url.pathname === "/" || url.pathname.endsWith("/"), `${link} must use the canonical trailing slash`);
    assert.ok(paths.has(url.pathname), `${link} does not match an exported page`);
    assert.doesNotMatch(url.pathname, /^\/(?:404|_not-found)\b/, `${link} must not point at an error page`);
  }
});

test("llms-full.txt repeats the llms.txt summary without HTML", async () => {
  const [summary, full] = await Promise.all([
    readFile(join(exportDirectory, "llms.txt"), "utf8"),
    readFile(join(exportDirectory, "llms-full.txt"), "utf8"),
  ]);

  const header = (body) =>
    body
      .split("\n")
      .filter((line) => line.startsWith("# ") || line.startsWith("> "))
      .slice(0, 2);

  assert.equal(header(full)[0], "# 123 ABC Pro");
  assert.deepEqual(header(full), header(summary));
  assert.ok(full.length > 800, `expected a detailed file, received ${full.length} characters`);
  assert.doesNotMatch(full, /<[a-z][^>]*>/i, "no HTML in llms-full.txt");
  assert.ok(markdownLinks(full).length >= 1, "llms-full.txt should link back to the site");
});
