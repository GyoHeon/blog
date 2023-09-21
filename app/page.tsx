import { PostSection } from "@/components/layout/PostSection";

export default async function Home() {
  return (
    <>
      <PostSection postType="posts" isHome />

      <PostSection postType="memos" isHome />
    </>
  );
}
