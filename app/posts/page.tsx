import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Posts() {
  const posts = await getAllPostsMeta();

  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-flow-row grid-cols-1 gap-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
        ))}
      </div>
    </main>
  );
}
