import type { MetadataRoute } from "next";
import { events, posts } from "@/lib/content";

const base = "https://dallasea.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/what-we-do",
    "/members",
    "/leadership",
    "/events",
    "/initiatives",
    "/insights",
    "/partnerships",
    "/contact",
    "/join",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(e.date),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...eventRoutes, ...postRoutes];
}
