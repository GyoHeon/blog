import { PostCard } from "@/components/Card";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Posts() {
  const posts = await getAllPostsMeta("posts");

  const postsCard = posts.map((post) => <PostCard key={post.slug} {...post} slug={post.slug} />);

  return <PostSection postType="posts">{postsCard}</PostSection>;
}
