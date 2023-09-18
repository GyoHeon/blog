import { MemoCard } from "./MemoCard";
import { PostCard } from "./PostCard";

interface Props {
  posts: IMetaData[];
  postType: TPost;
}

export function PostGrid({ posts, postType = "posts" }: Props) {
  if (postType === "posts") {
    if (!posts.length) {
      return <div className="card">No Posts!</div>;
    }

    return (
      <>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </>
    );
  }

  if (!posts.length) {
    return <div className="card">No Memos!</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <MemoCard key={post.slug} {...post} />
      ))}
    </>
  );
}
