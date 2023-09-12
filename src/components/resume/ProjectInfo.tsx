import { RESUME_WORKS } from "@/constants/resume";
import { Date } from "../Date";

export function ProjectInfo({ title, projects }: { title: string; projects: typeof RESUME_WORKS }) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

      <ul>
        {projects.map((work) => (
          <li key={work.title} className="flex flex-col gap-2 pb-2 border-b border-neutral-700">
            <h4>{work.title}</h4>
            <Date className="text-[20px]" date={work.date} />

            <ul className="flex gap-2 my-2">
              {work.stack.map((stack) => (
                <li key={stack} className="tag">
                  {stack}
                </li>
              ))}
            </ul>

            <span>{work.description}</span>

            <ul className="list-disc">
              {work.works.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 ml-2">
                  <h5>{item.title}</h5>
                  <Date date={item.date} />
                  <p className="ml-2 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
