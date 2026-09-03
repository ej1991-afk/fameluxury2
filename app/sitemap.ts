import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { cars } from "@/lib/cars";
import { getLocationPages } from "@/lib/locations";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/fleet",
    "/brands",
    "/locations",
    "/blog",
    "/about",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path === "/fleet" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/fleet" ? 0.9 : 0.7,
  }));

  const fleetRoutes: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${siteConfig.url}/fleet/${car.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = getLocationPages().map(
    (location) => ({
      url: `${siteConfig.url}/locations/${location.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...fleetRoutes, ...locationRoutes, ...blogRoutes];
}
