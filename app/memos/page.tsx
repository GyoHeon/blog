import { MemoCard } from "@/components/card/MemoCard";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Memos() {
  const posts = await getAllPostsMeta("memos");

  const postsCard = posts.map((post) => <MemoCard key={post.slug} {...post} slug={post.slug} />);

  return (
    <PostSection postType="memos">
      {postsCard}
      {postsCard}
      {postsCard}
    </PostSection>
  );
}
