import { PostHeader } from "./PostHeader";

interface Props {
  meta: IMetaData;
  content: React.ReactNode;
}

export default function PostMain({ meta, content }: Props) {
  return (
    <main className="min-h-screen p-6">
      <PostHeader {...meta} />

      {content}
    </main>
  );
}
