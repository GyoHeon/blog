import { PostCard } from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-flow-row grid-cols-1 gap-12 gap-y-24 lg:grid-cols-3 max-w-4xl mx-auto">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <PostCard title="Hello World" description={`This is a test ${index} post`} image="/image/lgh.png" />
          ))}
      </div>
    </main>
  );
}
