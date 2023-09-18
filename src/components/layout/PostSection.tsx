import { getAllPostsMeta } from "@/util/mdx";
import { postCount } from "@/util/postCount";
import Link from "next/link";
import { PageList } from "../PageList";
import { PostGrid } from "../card/PostGrid";

interface Props {
  postType: TPost;
  page?: string;
  isHome?: boolean;
}

export async function PostSection({ postType, page = "1", isHome = false }: Props) {
  const numPage = Number(page);
  const posts = await getAllPostsMeta("posts", numPage);
  const pageNum = postCount(postType);

  if (!posts) return <p>No posts!</p>;

  return (
    <div className="post-box">
      <header className="title-section">
        <h2>{postType.toUpperCase()}</h2>
        {isHome ? (
          <Link className="text-lg border-link" href={`/${postType}`}>
            More
          </Link>
        ) : (
          <PageList maxPage={pageNum} nowPage={numPage} postType={postType} />
        )}
      </header>

      <PostGrid posts={posts} postType={postType} />
    </div>
  );
}
