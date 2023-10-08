import { Date } from "../Date";
import { ActionList } from "./ActionList";
import { ProjectHeader } from "./ProjectHeader";
import { ResumeSection } from "./ResumeSection";

export function ResumeActivities({ title, projects }: IResumeActivities) {
  return (
    <ResumeSection title={title}>
      <ul>
        {projects.map(({ title, date, values, link = "" }) => (
          <li key={title} className="flex flex-col gap-2 pb-6 border-b border-neutral-700">
            <ProjectHeader title={title} link={link} />
            <Date date={date} />
            <ActionList values={values} />
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
