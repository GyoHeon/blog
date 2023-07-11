import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Memo({ params: { slug } }: Props) {
  const { meta, content } = await getPostBySlug("memos/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta} content={content} />;
}
