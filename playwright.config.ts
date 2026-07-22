import { defineConfig } from "@playwright/test";

function testedBaseUrl() {
  const configuredBaseUrl = process.env.PLAYWRIGHT_BASE_URL;
  if (!configuredBaseUrl) return "http://127.0.0.1:4173";
  const parsedBaseUrl = new URL(configuredBaseUrl);
  if (!["http:", "https:"].includes(parsedBaseUrl.protocol)) {
    throw new Error(`PLAYWRIGHT_BASE_URL must use HTTP(S): "${configuredBaseUrl}"`);
  }
  return parsedBaseUrl.href;
}

const baseURL = testedBaseUrl();
const testsExternalDeployment = Boolean(process.env.PLAYWRIGHT_BASE_URL);

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: "line",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL,
    contextOptions: { reducedMotion: "reduce" },
    trace: "retain-on-failure",
  },
  webServer: testsExternalDeployment
    ? undefined
    : {
        command: "node scripts/serve-export.mjs out",
        url: baseURL,
        reuseExistingServer: false,
        timeout: 30_000,
      },
  projects: [
    {
      name: "desktop-chromium",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile-chromium",
      testIgnore: /all-routes[.]spec[.]ts/,
      use: { viewport: { width: 390, height: 844 } },
    },
  ],
});
