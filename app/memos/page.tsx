import { MemoCard } from "@/components/card/MemoCard";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Memos() {
  const memos = await getAllPostsMeta("memos");

  if (!memos) return <p>No posts!</p>;

  const memoCards = memos.map((post) => <MemoCard key={post.slug} {...post} slug={post.slug} />);

  return <PostSection postType="memos">{memoCards}</PostSection>;
}
