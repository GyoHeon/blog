import { ResumeCard } from "@/components/card/ResumeCard";
import { PostSection } from "@/components/layout/PostSection";

export default async function Home() {
  return (
    <div className="">
      <ResumeCard />
      <PostSection postType="posts" isHome />

      <PostSection postType="memos" isHome />
    </div>
  );
}
