import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";
import { generateMetadataFromPost } from "@/util/metadata";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  return await generateMetadataFromPost({ params: { slug }, type: "memos" });
}

export default async function Memo({ params: { slug } }: Props) {
  if (!slug) return <div>404</div>;

  const { meta, content } = await getPostBySlug("memos/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta}>{content}</PostMain>;
}
