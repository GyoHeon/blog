import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Posts() {
  const posts = await getAllPostsMeta();

  return (
    <div className="post-box">
      <h2 className="title-section">POSTS</h2>

      {posts.map((post) => (
        <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
      ))}
    </div>
  );
}
