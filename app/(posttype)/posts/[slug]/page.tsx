import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";
import { generateMetadataFromPost } from "@/util/metadata";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  return await generateMetadataFromPost({ params: { slug }, type: "posts" });
}

export default async function Post({ params: { slug } }: Props) {
  if (!slug) return <div>404</div>;

  const { meta, content } = await getPostBySlug("posts/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta}>{content}</PostMain>;
}
