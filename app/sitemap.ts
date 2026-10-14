import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod tracks the content review date, not the build date (brief §17).
  const lastModified = new Date(`${site.lastReviewedIso}T12:00:00Z`);
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
