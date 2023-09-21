import Image from "next/image";
import { Date } from "../Date";
import { ActionList } from "./ActionList";
import { ResumeSection } from "./ResumeSection";

export function ResumeActivities({ title, projects }: IResumeActivities) {
  return (
    <ResumeSection title={title}>
      <ul>
        {projects.map(({ title, date, description, values, link = "" }) => (
          <li key={title} className="flex flex-col gap-2 pb-2 border-b border-neutral-700">
            <header className="flex gap-3 items-end">
              <h4>{title}</h4>
              {link && (
                <a className="flex mb-4 md:mb-2 border-link" href={link}>
                  <Image src="/icons/Link.svg" width={24} height={24} alt="Link icon" />
                  Link
                </a>
              )}
            </header>

            <Date date={date} />

            <span>{description}</span>

            <ActionList values={values} />
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
