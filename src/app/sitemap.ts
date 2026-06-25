import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zedjahorganiccrowdfarms.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/about/team",
    "/about/impact",
    "/about/gallery",
    "/services",
    "/partners",
    "/contact",
    "/store",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/about/gallery") || route.startsWith("/store") ? 0.5 : 0.8,
  }));
}
