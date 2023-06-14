import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-flow-row grid-cols-1 gap-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <PostCard {...MY_INFO} />
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
        ))}
      </div>
    </main>
  );
}
