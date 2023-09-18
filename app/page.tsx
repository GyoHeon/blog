import { ResumeCard } from "@/components/card/ResumeCard";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Home() {
  const posts = await getAllPostsMeta("posts");
  const memos = await getAllPostsMeta("memos");

  return (
    <div className="">
      <ResumeCard />
      <PostSection postType="posts" />

      <PostSection postType="memos" />
    </div>
  );
}
