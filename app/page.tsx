import { MemoCard } from "@/components/card/MemoCard";
import { PostCard } from "@/components/card/PostCard";
import { ResumeCard } from "@/components/card/ResumeCard";
import { getAllPostsMeta } from "@/util/mdx";
import { MY_INFO } from "../constants/home";

export default async function Home() {
  const posts = await getAllPostsMeta("posts");
  const memos = await getAllPostsMeta("memos");

  return (
    <div className="post-box">
      <ResumeCard {...MY_INFO} />

      <h2 className="title-section">POSTS</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} slug={post.slug} />
      ))}

      <h2 className="title-section">MEMOS</h2>
      {memos.map((post) => (
        <MemoCard key={post.slug} {...post} slug={post.slug} />
      ))}
    </div>
  );
}
