import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="post-box">
        <PostCard {...MY_INFO} />
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
        ))}
      </div>
    </main>
  );
}
