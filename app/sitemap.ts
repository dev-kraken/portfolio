import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devkraken.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://devkraken.com/blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://devkraken.com/email-checker",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://devkraken.com/blog/free-temporary-email-checker-api",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://devkraken.com/blog/configuring-multiple-git-account",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://devkraken.com/blog/setting-acls-in-arch",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
