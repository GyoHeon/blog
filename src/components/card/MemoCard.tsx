import Link from "next/link";
import { Date } from "../Date";

type Props = Omit<IMemoMetaData, "tags">;

export function MemoCard({ title, date, description, slug }: Props) {
  return (
    <article className="card border-2">
      <Link className="flex flex-row md:flex-col h-56 md:h-40" href={slug}>
        <div className="ml-4 md:ml-0 p-1">
          <h5 className="mt-2 md:mt-4 font-bold truncate">{title}</h5>
          <Date date={date} />
          <p className="mt-2 text-main">{description}</p>
        </div>
      </Link>
    </article>
  );
}
