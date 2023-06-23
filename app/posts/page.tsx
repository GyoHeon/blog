import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Posts() {
  const posts = await getAllPostsMeta();

  return (
    <main className="min-h-screen p-6">
      <div className="post-box">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
        ))}
      </div>
    </main>
  );
}
