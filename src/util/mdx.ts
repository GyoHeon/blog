import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

const rootDirectory = path.join(process.cwd(), "mdx");

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<MetaData>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export async function getAllPostsMeta(): Promise<MetaData[]> {
  const files = fs.readdirSync(rootDirectory).filter((path) => /\.mdx?$/.test(path));

  let posts: MetaData[] = [];

  for (const file of files) {
    const post = await getPostBySlug(file);

    if (!post) continue;

    posts.push(post.meta);
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
