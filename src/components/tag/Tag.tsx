interface Props {
  tag: string;
}

export function Tag({ tag }: Props) {
  return <li className="tag">{tag}</li>;
}
