export function ResumeSkill({ title, skills }: { title: string; skills: string[] }) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

      <ul>
        <ul className="flex gap-2 my-2">
          {skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      </ul>
    </section>
  );
}
