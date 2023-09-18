import { PostSection } from "@/components/layout/PostSection";

export default async function Posts({ searchParams: { page } }: IPostSearchParams) {
  return <PostSection postType="posts" page={page} />;
}
