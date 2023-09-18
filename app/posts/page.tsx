import { PostSection } from "@/components/layout/PostSection";

interface Props {
  searchParams: { page: number };
}

export default async function Posts({ searchParams: { page } }: Props) {
  return <PostSection postType="posts" page={page} />;
}
