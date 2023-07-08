type Props = Partial<MetaData>;

export function PostHeader({ title, date, tags }: Props) {
  return (
    <header className="mb-5">
      <div>{tags}</div>
      <h1 className="py-2 border-b-2 border-[--orange]">{title}</h1>
      <span className="inline-block p-0.5 border-2 border-t-0 border-[--orange]">{date}</span>
    </header>
  );
}
