import { Tag } from "./Tag";

interface Props {
  tags?: string;
}

export function Tags({ tags }: Props) {
  if (!tags) return null;

  const tagList = tags.split(",");

  return (
    <ul className="flex gap-4">
      {tagList.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </ul>
  );
}
