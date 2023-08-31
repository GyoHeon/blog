import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const URL = "https://www.gyoheon.com";

  return [
    {
      url: URL,
      lastModified: now,
    },
    {
      url: URL + "/posts",
      lastModified: now,
    },
    {
      url: URL + "/resume",
      lastModified: now,
    },
    {
      url: URL + "/memos",
      lastModified: now,
    },
  ];
}
