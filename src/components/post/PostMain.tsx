import "highlight.js/styles/github-dark.css";
import { PostHeader } from "./PostHeader";
import "./styles.scss";

interface Props {
  meta: IMetaData;
  children: React.ReactNode;
}

export default function PostMain({ meta, children }: Props) {
  return (
    <main className="content-width p-6">
      <PostHeader {...meta} />

      <article id="main-post">{children}</article>
    </main>
  );
}
