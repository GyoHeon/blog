interface Props {
  tag: string;
}

export function Tag({ tag }: Props) {
  return <li className="px-2 bg-[--green] rounded-md">{tag}</li>;
}
