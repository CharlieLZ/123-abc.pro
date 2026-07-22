import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:amp|#38);/g, "&")
    .replace(/&(?:nbsp|#160);/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

test("exports substantial bilingual guidance and learning routes", async () => {
  const html = await readFile("out/index.html", "utf8");
  const pageText = visibleText(html);

  assert.match(html, /<html lang="en"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/123-abc[.]pro\/?"/);
  assert.match(pageText, /Playful English alphabet practice/);
  assert.match(pageText, /轻松的英语字母启蒙/);
  assert.match(pageText, /Privacy · 隐私说明/);
  assert.match(pageText, /Independent project · 独立项目声明/);
  assert.ok(pageText.length >= 1_500, `Expected at least 1500 visible characters; received ${pageText.length}`);

  const letterLinks = html.match(/href="\/h\/abcs\/letter-[a-z]\/"/g) ?? [];
  assert.equal(letterLinks.length, 26);
  assert.doesNotMatch(html, /href="\/h\/abcs\/letter-[a-z]\/index[.]html"/);
});

test("exports crawler metadata with the canonical production host", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile("out/robots.txt", "utf8"),
    readFile("out/sitemap.xml", "utf8"),
  ]);

  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/123-abc[.]pro\/sitemap[.]xml/);
  assert.match(sitemap, /<loc>https:\/\/123-abc[.]pro\/?<\/loc>/);
});

test("does not expose template identity in the production homepage", async () => {
  const html = await readFile("out/index.html", "utf8");

  assert.doesNotMatch(html, /ai-website-clone-template/i);
  assert.doesNotMatch(html, /JCodesMore/i);
});
