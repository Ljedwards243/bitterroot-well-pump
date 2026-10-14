import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Every crawler is welcome, including AI search crawlers (GPTBot, OAI-SearchBot,
// ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended).
// Brief §17: no content is blocked. /twilio/ holds the phone line's voicemail XML, not pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/twilio/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
