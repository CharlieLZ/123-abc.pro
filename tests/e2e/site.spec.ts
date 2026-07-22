import { expect, test } from "@playwright/test";

import {
  expectNoRuntimeFailures,
  recordRuntimeFailures,
} from "./runtime-failures";

test("homepage exposes bilingual guidance and all activity choices", async ({ page }) => {
  const failures = recordRuntimeFailures(page);
  const response = await page.goto("/", { waitUntil: "networkidle" });

  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { name: /Playful English alphabet practice/ })).toBeVisible();
  await expect(page.getByText("轻松的英语字母启蒙")).toBeVisible();
  await expect(page.locator('.alphabet-board a[href^="/h/abcs/letter-"]')).toHaveCount(26);
  await expect(page.locator(".activity-rail a")).toHaveCount(8);
  await expect(page.locator("#privacy")).toContainText("浏览器本地存储");

  const brokenImages = await page.locator("img").evaluateAll(
    (images) =>
      images.filter((image) => {
        const imageElement = image as HTMLImageElement;
        return !imageElement.complete || imageElement.naturalWidth === 0;
      }).length,
  );
  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  const bodyTextLength = (await page.locator("body").innerText()).replace(/\s+/g, "").length;

  expect(brokenImages).toBe(0);
  expect(horizontalOverflow).toBe(false);
  expect(bodyTextLength).toBeGreaterThan(1_000);
  expectNoRuntimeFailures(failures);
});

test("keyboard users can reveal the skip link", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const skipLink = page.getByRole("link", { name: /Skip to activities/ });

  await page.keyboard.press("Tab");

  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
});

test("letter activity renders an interactive painted canvas", async ({ page }) => {
  const failures = recordRuntimeFailures(page);
  const response = await page.goto("/h/abcs/letter-a/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(4_000);

  expect(response?.status()).toBe(200);
  await expect(page.locator("canvas").first()).toBeVisible();
  const canvasState = await page.locator("canvas").first().evaluate((element) => {
    const canvas = element as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    const pixels = context?.getImageData(0, 0, Math.min(canvas.width, 60), Math.min(canvas.height, 60)).data;
    return {
      width: canvas.width,
      height: canvas.height,
      painted: pixels ? [...pixels].some((channel, index) => index % 4 === 3 && channel > 0) : false,
    };
  });

  expect(canvasState.width).toBeGreaterThan(0);
  expect(canvasState.height).toBeGreaterThan(0);
  expect(canvasState.painted).toBe(true);
  expectNoRuntimeFailures(failures);
});

test("alphabet song renders without dynamic-code errors", async ({ page }) => {
  const failures = recordRuntimeFailures(page);
  const response = await page.goto("/h/abcs/song/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3_000);

  expect(response?.status()).toBe(200);
  await expect(page.locator("canvas").first()).toBeVisible();
  expectNoRuntimeFailures(failures);
});

test("video activity loads local media, captions, and transcript", async ({ page }) => {
  const failures = recordRuntimeFailures(page);
  const response = await page.goto("/h/abcsongs-acv/vfs434189727?sn=abcs-acv", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(2_500);

  expect(response?.status()).toBe(200);
  await expect(page.locator("video").first()).toBeVisible();
  const definitions = await page.evaluate(() => {
    const browserWindow = window as typeof window & {
      SpecialDefinitions?: { captionURL?: string; transcriptLink?: string };
    };
    return browserWindow.SpecialDefinitions ?? {};
  });
  expect(definitions.captionURL).toBeTruthy();
  expect(definitions.transcriptLink).toBeTruthy();
  if (!definitions.captionURL || !definitions.transcriptLink) {
    throw new Error(`Video metadata is incomplete: ${JSON.stringify(definitions)}`);
  }

  for (const reference of [definitions.captionURL, definitions.transcriptLink]) {
    const assetResponse = await page.request.get(new URL(reference, page.url()).href);
    expect(assetResponse.status()).toBe(200);
  }
  expectNoRuntimeFailures(failures);
});
