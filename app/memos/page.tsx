import { PostCard } from "@/components/Card";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Memos() {
  const posts = await getAllPostsMeta("memos");

  const postsCard = posts.map((post) => <PostCard key={post.slug} {...post} slug={post.slug} />);

  return <PostSection postType="memos">{postsCard}</PostSection>;
}
