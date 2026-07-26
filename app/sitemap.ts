import type { MetadataRoute } from "next";
import { machines } from "./data";
import { articles } from "./seo-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.phenix13.fr";
  const pages = ["", "/terrassement", "/agregats", "/location-engins", "/conseils"];
  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...machines.map((machine) => ({
      url: `${base}/location-engins/${machine.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${base}/conseils/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
