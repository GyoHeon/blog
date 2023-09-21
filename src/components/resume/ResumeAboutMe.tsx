export function ResumeAboutMe({ title, description }: { title: string; description: string }) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

      <p className="whitespace-pre-line">{description}</p>
    </section>
  );
}
