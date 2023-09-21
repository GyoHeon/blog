import { ResumeSection } from "./ResumeSection";

interface Props {
  title: string;
  values: {
    title: string;
    content: string[];
  }[];
}

export function ResumeETC({ title, values }: Props) {
  return (
    <ResumeSection title={title}>
      <ul>
        {values.map(({ title, content }) => (
          <li key={title}>
            <h4>{title}</h4>
            <ul className="p-2">
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
