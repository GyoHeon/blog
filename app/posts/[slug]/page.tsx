import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: Props) {
  const { meta, content } = await getPostBySlug(params.slug);

  console.log(meta, content);

  return (
    <main className="min-h-screen p-6">
      <h1>{meta.title}</h1>
      {meta.date}

      {content}
    </main>
  );
}
