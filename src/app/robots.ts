import type { MetadataRoute } from "next";
import { buildRobots } from "@/config/discovery";
import { siteUrl } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return buildRobots({
    sitemap: new URL("/sitemap.xml", siteUrl).href,
    host: siteUrl.origin,
  });
}
