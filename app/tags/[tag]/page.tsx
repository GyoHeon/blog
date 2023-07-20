import { PostCard } from "@/components/card/PostCard";
import { getAllPostsMeta } from "@/util/mdx";
import { Fragment } from "react";

interface Props {
  params: {
    tag: string;
  };
}

export default async function Tags({ params: { tag } }: Props) {
  const posts = await getAllPostsMeta("posts");

  if (!posts) return <p>No posts</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return <p>No posts</p>;
  }

  return (
    <Fragment>
      {tagPosts.map((post) => (
        <PostCard key={post.slug} {...post} slug={post.slug} />
      ))}
    </Fragment>
  );
}
