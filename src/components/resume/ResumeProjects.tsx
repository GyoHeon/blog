import { Date } from "../Date";
import { SkillTags } from "../tag/SkillTags";
import { ActionList } from "./ActionList";
import { ProjectHeader } from "./ProjectHeader";
import { ResumeSection } from "./ResumeSection";

export function ResumeProjects({ title, projects }: IResumeProjects) {
  return (
    <ResumeSection title={title}>
      <ul>
        {projects.map(({ title, date, description, stack, works, link = "" }) => (
          <li key={title} className="flex flex-col gap-2 pb-2 border-b border-neutral-700">
            <ProjectHeader title={title} link={link} />
            <Date date={date} />
            <SkillTags stack={stack} />
            <span>{description}</span>

            <ul>
              {works.map(({ title, description, values }) => (
                <li key={title} className="flex flex-col gap-1 my-6">
                  <h5>{title}</h5>

                  <ul>
                    <li className="my-2">{description}</li>

                    <li className="mt-6">
                      <h6>업무</h6>
                    </li>

                    <li>
                      <ActionList values={values} />
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
