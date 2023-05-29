import { PostCard } from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostCard title="Hello World" description="This is a test post" image="/image/lgh.png" />
    </main>
  );
}
