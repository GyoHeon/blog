import Link from "next/link";

interface Props {
  tag: string;
}

export function Tag({ tag }: Props) {
  return (
    <li>
      <Link href={`/tags/${tag}`} className="tag tag-hover">
        {tag}
      </Link>
    </li>
  );
}
