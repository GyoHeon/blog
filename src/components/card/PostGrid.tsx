import { MemoCard } from "./MemoCard";
import { PostCard } from "./PostCard";

interface Props {
  posts: IMetaData[];
  postType: TPost;
}

export function PostGrid({ posts, postType = "posts" }: Props) {
  const isPost = postType === "posts";

  if (!posts.length) {
    return <div className="card">No {postType}!</div>;
  }

  return (
    <>
      {posts.map((post) => (isPost ? <PostCard key={post.slug} {...post} /> : <MemoCard key={post.slug} {...post} />))}
    </>
  );
}
