import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { auditStaticAssets } from "../../scripts/static-asset-audit.mjs";

async function staticRoot(t) {
  const root = await mkdtemp(join(tmpdir(), "abc123-asset-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test("accepts a present local image with a valid signature", async (t) => {
  const root = await staticRoot(t);
  await writeFile(join(root, "index.html"), '<img src="/images/letter.png" alt="Letter A">');
  await mkdir(join(root, "images"));
  await writeFile(join(root, "images/letter.png"), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));

  const report = await auditStaticAssets(root);

  assert.equal(report.issues.length, 0);
  assert.equal(report.inspectedReferences, 1);
});

test("reports the source and target for a missing local reference", async (t) => {
  const root = await staticRoot(t);
  await writeFile(join(root, "index.html"), '<script src="/scripts/missing.js"></script>');

  const report = await auditStaticAssets(root);

  assert.deepEqual(report.issues, [
    {
      sourceFile: "index.html",
      reference: "/scripts/missing.js",
      reason: "missing-reference",
      target: "scripts/missing.js",
    },
  ]);
});

test("rejects external runtime references", async (t) => {
  const root = await staticRoot(t);
  await writeFile(join(root, "index.html"), '<script src="https://example.com/runtime.js"></script>');

  const report = await auditStaticAssets(root);

  assert.equal(report.issues[0]?.reason, "external-reference");
  assert.equal(report.issues[0]?.target, "https://example.com");
});

test("accepts an absolute canonical URL on the production host", async (t) => {
  const root = await staticRoot(t);
  await writeFile(
    join(root, "index.html"),
    '<link rel="canonical" href="https://123-abc.pro/">',
  );

  const report = await auditStaticAssets(root);

  assert.equal(report.issues.length, 0);
});

test("rejects an asset whose bytes do not match its extension", async (t) => {
  const root = await staticRoot(t);
  await writeFile(join(root, "broken.mp4"), "not an mp4");

  const report = await auditStaticAssets(root);

  assert.deepEqual(report.issues, [
    {
      sourceFile: "broken.mp4",
      reason: "invalid-file-signature",
      target: ".mp4",
    },
  ]);
});
