import type { MetadataRoute } from "next";
import { getAllPosts, postDateToISO } from "@/lib/posts";

const BASE_URL = "https://www.sinergiaindustrias.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/ley-rep", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/implementacion-odoo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/levantamiento-de-procesos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/levantamiento-de-datos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/casos-de-exito", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(postDateToISO(post.date)),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pageEntries, ...postEntries];
}
