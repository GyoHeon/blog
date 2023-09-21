interface Props {
  title: string;
  values: {
    title: string;
    content: string[];
  }[];
}

export function ResumeETC({ title, values }: Props) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

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
    </section>
  );
}
