import { POSTS_PER_PAGE } from "@/constants/number";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { dateSortComparator } from "./date";

const rootDirectory = path.join(process.cwd(), "mdx");

export async function getPostBySlug(slug: string): Promise<IBlogPost> {
  const slugWithOutMdx = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${slugWithOutMdx}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<IMetaData>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
        format: "mdx",
      },
    },
  });

  return { meta: { ...frontmatter, slug: slugWithOutMdx }, content };
}

export const isMdx = (path: string) => /\.mdx?$/.test(path);

type TGetPostsMeta = (postType: TPost, page?: number | "all") => Promise<IMetaData[]>;

export const getPostsMeta: TGetPostsMeta = async (postType: TPost, page = 1) => {
  const viewedPosts: number[] = [];
  if (typeof page === "number") {
    viewedPosts.push((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  }

  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs.readdirSync(fileDirectory).filter(isMdx);

  const posts = await Promise.allSettled<IBlogPost | null>(
    files.map(async (file) => {
      try {
        const filePathWithType = path.join(postType, file);
        const post = await getPostBySlug(filePathWithType);

        return post;
      } catch (e) {
        console.error(e);
        return null;
      }
    })
  );

  const fullPosts = posts.filter(
    (post) => post.status === "fulfilled" && post.value
  ) as PromiseFulfilledResult<IBlogPost>[];
  const fullPostsData = fullPosts.map((post) => post.value.meta);

  return fullPostsData.sort(dateSortComparator).slice(...viewedPosts);
};
