import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const { meta } = await getPostBySlug("posts/" + slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [meta.image],
    },
  };
}

export default async function Post({ params: { slug } }: Props) {
  if (!slug) return <div>404</div>;

  const { meta, content } = await getPostBySlug("posts/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta}>{content}</PostMain>;
}
