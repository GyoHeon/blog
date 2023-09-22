interface Props {
  stack: string[];
}

export function SkillTags({ stack }: Props) {
  return (
    <ul className="flex flex-wrap gap-2 my-2">
      {stack.map((stack) => (
        <li key={stack} className="tag">
          {stack}
        </li>
      ))}
    </ul>
  );
}
