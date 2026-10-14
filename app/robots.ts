import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Every crawler is welcome, including AI search crawlers (GPTBot, OAI-SearchBot,
// ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended).
// Brief §17: nothing is blocked.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
