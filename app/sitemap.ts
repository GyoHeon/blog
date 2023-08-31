import { getAllPostsMeta } from "@/util/mdx";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const URL = "https://www.gyoheon.com/";

  const posts = await getAllPostsMeta("posts");
  const memos = await getAllPostsMeta("memos");

  const postsSlug = posts.map((post) => ({
    url: URL + post.slug,
    lastModified: now,
  }));

  const memosSlug = memos.map((memo) => ({
    url: URL + memo.slug,
    lastModified: now,
  }));

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
    ...postsSlug,
    ...memosSlug,
  ];
}
