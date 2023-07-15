import { Date } from "../Date";
import { Tags } from "../tag/Tags";

type Props = Omit<IMetaData, "image" | "slug">;

export function PostHeader({ title, date, tags }: Props) {
  return (
    <header className="flex flex-col mb-5">
      <Tags tags={tags} />
      <h1 className="py-2 border-b-2 border-[--orange]">{title}</h1>
      <Date className="border-l-2 border-r-2" date={date} />
    </header>
  );
}
