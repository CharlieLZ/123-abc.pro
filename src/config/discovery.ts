import type { MetadataRoute } from "next";

/**
 * AI answer-engine crawlers that may read and cite every public page.
 *
 * Single revert point (round-B ADR-B1): removing this list and returning to a
 * `*`-only robots.txt is a one-line change here. The order is fixed by the
 * round-B contract, and the integration test pins it.
 */
export const AI_CRAWLER_AGENTS = [
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

export const ALLOWED_PATHS = ["/", "/llms.txt", "/llms-full.txt"];

/**
 * This export has no account, admin, dashboard, checkout, API or internal
 * search route, so only Cloudflare's own infrastructure prefix is closed.
 */
export const DISALLOWED_PATHS = ["/cdn-cgi/"];

export function buildRobots({
  sitemap,
  host,
}: Readonly<{ sitemap: string; host: string }>): MetadataRoute.Robots {
  // RFC 9309: a named group never inherits the `*` group, so both groups carry
  // the exact same Allow/Disallow rules.
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: [...ALLOWED_PATHS],
      disallow: [...DISALLOWED_PATHS],
    },
    {
      userAgent: [...AI_CRAWLER_AGENTS],
      allow: [...ALLOWED_PATHS],
      disallow: [...DISALLOWED_PATHS],
    },
  ];

  return { rules, sitemap, host };
}
