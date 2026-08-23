import { CASE_STUDIES } from "@/constants/work";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.himanshu.works";
  const now = new Date().toISOString();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...CASE_STUDIES.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${base}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
