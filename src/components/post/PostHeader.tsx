import { Tags } from "../tag/Tags";

type Props = Partial<IMetaData>;

export function PostHeader({ title, date, tags }: Props) {
  return (
    <header className="mb-5">
      <Tags tags={tags} />
      <h1 className="py-2 border-b-2 border-[--orange]">{title}</h1>
      <span className="inline-block px-1 py-0.5 border-2 border-t-0 border-[--orange] date">{date}</span>
    </header>
  );
}
