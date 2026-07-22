#!/usr/bin/env node

import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".eot", "application/vnd.ms-fontobject"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp3", "audio/mpeg"],
  [".mp4", "video/mp4"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".ttf", "font/ttf"],
  [".txt", "text/plain; charset=utf-8"],
  [".vtt", "text/vtt; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

async function regularFile(path) {
  try {
    const details = await stat(path);
    return details.isFile() ? details : null;
  } catch (error) {
    if (error?.code === "ENOENT" || error?.code === "ENOTDIR") return null;
    throw error;
  }
}

function requestPath(root, requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  if (pathname.includes("\0")) return null;
  const path = resolve(root, `.${pathname}`);
  if (path !== root && !path.startsWith(`${root}${sep}`)) return null;
  return { path, pathname };
}

async function responseFile(root, requestUrl) {
  const requested = requestPath(root, requestUrl);
  if (!requested) return null;
  const candidates = [requested.path];
  if (requested.pathname.endsWith("/")) candidates.unshift(resolve(requested.path, "index.html"));
  if (!extname(requested.pathname)) {
    candidates.push(`${requested.path}.html`, resolve(requested.path, "index.html"));
  }
  for (const candidate of candidates) {
    const details = await regularFile(candidate);
    if (details) return { path: candidate, size: details.size };
  }
  return null;
}

function byteRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader ?? "");
  if (!match) return null;
  const start = match[1] ? Number(match[1]) : 0;
  const end = match[2] ? Number(match[2]) : size - 1;
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start || start >= size) {
    return { invalid: true };
  }
  return { start, end: Math.min(end, size - 1) };
}

function streamFile(request, response, file) {
  const range = byteRange(request.headers.range, file.size);
  if (range?.invalid) {
    response.writeHead(416, { "Content-Range": `bytes */${file.size}` });
    response.end();
    return;
  }
  const start = range?.start ?? 0;
  const end = range?.end ?? file.size - 1;
  const headers = {
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-store",
    "Content-Length": end - start + 1,
    "Content-Type": contentTypes.get(extname(file.path).toLowerCase()) ?? "application/octet-stream",
  };
  if (range) headers["Content-Range"] = `bytes ${start}-${end}/${file.size}`;
  response.writeHead(range ? 206 : 200, headers);
  if (request.method === "HEAD") return response.end();
  createReadStream(file.path, { start, end }).on("error", (error) => response.destroy(error)).pipe(response);
}

const root = resolve(process.argv[2] ?? "out");
const port = Number(process.env.PORT ?? "4173");
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`PORT must be an integer from 1 to 65535; received "${process.env.PORT}"`);
}
if (!(await stat(root)).isDirectory()) throw new Error(`Export root is not a directory: "${root}"`);

const server = createServer((request, response) => {
  if (!request.url || !["GET", "HEAD"].includes(request.method ?? "")) {
    response.writeHead(405).end();
    return;
  }
  responseFile(root, request.url)
    .then((file) => {
      if (!file) return response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
      streamFile(request, response, file);
    })
    .catch((error) => {
      console.error(`Static server failed for "${request.url}":`, error);
      if (!response.headersSent) response.writeHead(500).end("Internal server error");
      else response.destroy(error);
    });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`static_server=http://127.0.0.1:${port} root=${root}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
