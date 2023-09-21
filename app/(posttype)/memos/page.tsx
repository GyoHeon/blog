import { PostSection } from "@/components/layout/PostSection";

export default async function Memos({ searchParams: { page } }: IPostSearchParams) {
  return <PostSection postType="memos" page={page} />;
}
