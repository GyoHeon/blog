import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

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
      },
    },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export async function getAllPostsMeta(postType: TPost, page = 1): Promise<IMetaData[]> {
  const viewedPosts = [(page - 1) * 6, page * 6];

  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs
    .readdirSync(fileDirectory)
    .filter((path) => /\.mdx?$/.test(path))
    .slice(...viewedPosts);

  let posts: IMetaData[] = [];

  for (const file of files) {
    const filePathWithType = path.join(postType, file);
    const post = await getPostBySlug(filePathWithType);

    if (!post) continue;

    posts.push(post.meta);
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
