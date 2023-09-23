import { Date } from "../Date";
import { Tags } from "../tag/Tags";

type Props = Omit<IMetaData, "image" | "slug">;

export function PostHeader({ title, date, tags }: Props) {
  return (
    <header className="flex flex-col mb-5">
      <Tags tags={tags} />
      <h1 className="py-2 border-b-2 border-[--blue]">{title}</h1>
      <Date className="border-2 border-t-0 border-[--blue]" date={date} />
    </header>
  );
}
