import { PostSection } from "@/components/layout/PostSection";
import { getPostsMeta } from "@/util/mdx";

interface Props {
  params: {
    tag: string;
  };
}

export default async function Tags({ params: { tag } }: Props) {
  const rawPosts = await getPostsMeta("posts");
  const rawMemos = await getPostsMeta("memos");

  if (!(rawPosts || rawMemos)) return <p>No posts</p>;

  const tagPosts = rawPosts.filter((post) => post.tags.includes(tag));
  const tagMemos = rawMemos.filter((memo) => memo.tags.includes(tag));

  return (
    <>
      <PostSection postType="posts" />
      <PostSection postType="memos" />
    </>
  );
}
