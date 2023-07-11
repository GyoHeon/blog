import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta("posts");
  const memos = await getAllPostsMeta("memos");

  console.log(posts);

  return (
    <div className="post-box">
      <h2 className="title-section">MY</h2>
      <PostCard {...MY_INFO} />

      <h2 className="title-section">POSTS</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} slug={post.slug} />
      ))}

      <h2 className="title-section">MEMOS</h2>
      {memos.map((post) => (
        <PostCard key={post.slug} {...post} slug={post.slug} />
      ))}
    </div>
  );
}
