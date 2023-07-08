import { PostHeader } from "@/components/post/PostHeader";
import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Post({ params: { slug } }: Props) {
  const { meta, content } = await getPostBySlug(slug);

  if (!(meta && content)) return <div>404</div>;

  return (
    <main className="min-h-screen p-6">
      <PostHeader {...meta} />

      {content}
    </main>
  );
}
