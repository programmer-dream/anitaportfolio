import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map((n) => ({
    url: `${site.siteUrl}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));
  const work = projects.map((p) => ({ url: `${site.siteUrl}/work/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.7 }));
  return [...pages, ...work];
}
