import { MemoCard } from "@/components/card/MemoCard";
import { PostCard } from "@/components/card/PostCard";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

interface Props {
  params: {
    tag: string;
  };
}

export default async function Tags({ params: { tag } }: Props) {
  const rawPosts = await getAllPostsMeta("posts");
  const rawMemos = await getAllPostsMeta("memos");

  if (!(rawPosts || rawMemos)) return <p>No posts</p>;

  const tagPosts = rawPosts.filter((post) => post.tags.includes(tag));
  const tagMemos = rawMemos.filter((memo) => memo.tags.includes(tag));

  const posts = (() => {
    if (!tagPosts.length) {
      return <p>No posts</p>;
    }
    return tagPosts.map((post) => <PostCard key={post.slug} {...post} slug={post.slug} />);
  })();

  const memos = (() => {
    if (!tagMemos.length) {
      return <p>No Memos</p>;
    }
    return tagMemos.map((post) => <MemoCard key={post.slug} {...post} slug={post.slug} />);
  })();

  return (
    <>
      <PostSection postType="posts" title="posts">
        {posts}
      </PostSection>
      <PostSection postType="memos" title="memos">
        {memos}
      </PostSection>
    </>
  );
}
