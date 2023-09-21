import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const { meta } = await getPostBySlug("memos/" + slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: meta.image,
      description: meta.description,
      type: "article",
    },
  };
}

export default async function Memo({ params: { slug } }: Props) {
  if (!slug) return <div>404</div>;

  const { meta, content } = await getPostBySlug("memos/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta}>{content}</PostMain>;
}
