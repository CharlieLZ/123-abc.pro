import { expect, type Page } from "@playwright/test";

function isCloudflareMeasurement(url: string) {
  return new URL(url).hostname === "static.cloudflareinsights.com";
}

export function recordRuntimeFailures(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const failedRequests: string[] = [];
  const badResponses: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    if (request.failure()?.errorText === "net::ERR_ABORTED") return;
    if (isCloudflareMeasurement(request.url())) return;
    failedRequests.push(request.url());
  });
  page.on("response", (response) => {
    if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`);
  });

  return { consoleErrors, pageErrors, failedRequests, badResponses };
}

export function expectNoRuntimeFailures(
  failures: ReturnType<typeof recordRuntimeFailures>,
) {
  expect(failures.consoleErrors).toEqual([]);
  expect(failures.pageErrors).toEqual([]);
  expect(failures.failedRequests).toEqual([]);
  expect(failures.badResponses).toEqual([]);
}
