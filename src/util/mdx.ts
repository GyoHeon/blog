import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const rootDirectory = path.join(process.cwd(), "mdx");

export async function getPostBySlug(slug: string): Promise<IBlogPost> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

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

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export const isMdx = (path: string) => /\.mdx?$/.test(path);

type TGetPostsMeta = (postType: TPost, page?: number | "all") => Promise<IMetaData[]>;

export const getPostsMeta: TGetPostsMeta = async (postType: TPost, page = 1) => {
  const viewedPosts: number[] = [];
  if (typeof page === "number") {
    viewedPosts.push((page - 1) * 6, page * 6);
  }

  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs
    .readdirSync(fileDirectory)
    .filter(isMdx)
    .slice(...viewedPosts);

  let posts: IMetaData[] = [];

  for (const file of files) {
    const filePathWithType = path.join(postType, file);
    const post = await getPostBySlug(filePathWithType);

    if (!post) continue;

    posts.push(post.meta);
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};
