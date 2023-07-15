import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

const rootDirectory = path.join(process.cwd(), "mdx");

export async function getPostBySlug(slug: string): Promise<IBlogPost> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<IMetaData>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export async function getAllPostsMeta(postType: TPost): Promise<IMetaData[]> {
  const fileDirectory = path.join(rootDirectory, postType);

  const files = fs.readdirSync(fileDirectory).filter((path) => /\.mdx?$/.test(path));

  let posts: IMetaData[] = [];

  for (const file of files) {
    const filePathWithType = path.join(postType, file);
    const post = await getPostBySlug(filePathWithType);

    if (!post) continue;

    posts.push(post.meta);
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
