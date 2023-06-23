import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 py-12">
      <div className="post-box">
        <h2>MY</h2>
        <PostCard {...MY_INFO} />
        <h2>POSTS</h2>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
        ))}
        <h2>MEMOS</h2>
      </div>
    </main>
  );
}
