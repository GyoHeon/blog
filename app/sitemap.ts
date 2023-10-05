import { getPostsMeta } from "@/util/mdx";
import { MetadataRoute } from "next";

const URL = "https://www.gyoheon.com/";
const MENUS = ["posts", "resume", "memos"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const posts = await getPostsMeta("posts", "all");
  const memos = await getPostsMeta("memos", "all");

  const postsSlug = posts.map((post) => ({
    url: URL + post.slug,
    lastModified: now,
  }));

  const memosSlug = memos.map((memo) => ({
    url: URL + memo.slug,
    lastModified: now,
  }));

  return [...MENUS.map((menu) => ({ url: URL + menu, lastModified: now })), ...postsSlug, ...memosSlug];
}
