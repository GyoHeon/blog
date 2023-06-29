import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <div className="post-box">
      <h2 className="title-section">MY</h2>
      <PostCard {...MY_INFO} />

      <h2 className="title-section">POSTS</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} slug={"posts/" + post.slug} />
      ))}

      <h2 className="title-section">MEMOS</h2>
    </div>
  );
}
