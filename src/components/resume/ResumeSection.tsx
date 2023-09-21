export function ResumeSection({ title, children }: { title: string; children: React.ReactElement }) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

      {children}
    </section>
  );
}
