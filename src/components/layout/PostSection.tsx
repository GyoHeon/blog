import { getAllPostsMeta } from "@/util/mdx";
import { postCount } from "@/util/postCount";
import Link from "next/link";
import { PostGrid } from "../card/PostGrid";

interface Props {
  postType: TPost;
  page?: number;
}

export async function PostSection({ postType, page = 1 }: Props) {
  const posts = await getAllPostsMeta("posts", page);
  const pageNum = postCount(postType);

  if (!posts) return <p>No posts!</p>;

  return (
    <div className="post-box">
      <header className="title-section">
        <h2>{postType.toUpperCase()}</h2>
        <Link className="text-lg border-link" href={`/${postType}`}>
          More
        </Link>
      </header>

      <PostGrid posts={posts} postType={postType} />
    </div>
  );
}
