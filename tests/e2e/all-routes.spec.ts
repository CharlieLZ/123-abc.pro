import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { expect, test } from "@playwright/test";

import {
  expectNoRuntimeFailures,
  recordRuntimeFailures,
} from "./runtime-failures";

function htmlFilesUnder(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFilesUnder(entryPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
  });
}

function routeForHtmlFile(exportDirectory: string, htmlFile: string) {
  const relativePath = relative(exportDirectory, htmlFile).split(sep).join("/");
  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(0, -"index.html".length)}`;
  }
  return `/${relativePath}`;
}

const exportDirectory = join(process.cwd(), "out");
const activityRoutes = htmlFilesUnder(join(exportDirectory, "h"))
  .map((htmlFile) => routeForHtmlFile(exportDirectory, htmlFile))
  .sort();

if (activityRoutes.length !== 131) {
  throw new Error(`Expected 131 exported activity routes, received ${activityRoutes.length}`);
}

test.describe("all exported activity routes", () => {
  for (const activityRoute of activityRoutes) {
    test(activityRoute, async ({ page }) => {
      const failures = recordRuntimeFailures(page);
      const response = await page.goto(activityRoute, { waitUntil: "load" });
      await page.waitForTimeout(750);

      expect(response?.status()).toBe(200);
      const hasRenderedContent = await page.evaluate(() => {
        const visibleTextLength = document.body.innerText.replace(/\s+/g, "").length;
        const paintedSurface = document.querySelector(
          "canvas, img:not([width='0']), video, main, article",
        );
        return visibleTextLength > 20 || paintedSurface !== null;
      });
      expect(hasRenderedContent).toBe(true);
      expectNoRuntimeFailures(failures);
    });
  }
});
