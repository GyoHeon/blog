import { PostCard } from "@/components/Card";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostCard
        title="Hi! I'm Lee Gyoheon"
        description="안녕하세요! 프론트엔드 개발자 이교헌입니다."
        image="/image/lgh.png"
      />
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </main>
  );
}
