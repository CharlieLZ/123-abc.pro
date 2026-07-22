#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { link, readdir, stat, unlink } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.argv[2] || "out");

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

async function digest(path) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex");
}

const bySize = new Map();
for (const path of await filesUnder(root)) {
  const details = await stat(path);
  if (details.size < 1024) continue;
  const matches = bySize.get(details.size) || [];
  matches.push(path);
  bySize.set(details.size, matches);
}

let linkedFiles = 0;
let recoveredBytes = 0;
for (const [size, paths] of bySize) {
  if (paths.length < 2) continue;
  const byHash = new Map();
  for (const path of paths) {
    const hash = await digest(path);
    const matches = byHash.get(hash) || [];
    matches.push(path);
    byHash.set(hash, matches);
  }
  for (const matches of byHash.values()) {
    if (matches.length < 2) continue;
    const [canonical, ...duplicates] = matches;
    for (const duplicate of duplicates) {
      await unlink(duplicate);
      await link(canonical, duplicate);
      linkedFiles += 1;
      recoveredBytes += size;
    }
  }
}

console.log(`deduplicated_files=${linkedFiles} recovered_bytes=${recoveredBytes}`);
