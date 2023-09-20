import Image from "next/image";
import { Date } from "../Date";
import { ActionList } from "./ActionList";

export function WorkInfo({ title, projects }: { title: string; projects: IResumeWork[] }) {
  return (
    <section>
      <h2 className="title-resume">{title}</h2>

      <ul>
        {projects.map(({ title, date, description, stack, works, link = "" }) => (
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
            <Date className="text-[20px]" date={date} />

            {stack && (
              <ul className="flex gap-2 my-2">
                {stack.map((stack) => (
                  <li key={stack} className="tag">
                    {stack}
                  </li>
                ))}
              </ul>
            )}

            <span>{description}</span>

            <ul>
              {works.map(({ title, date, description, values }) => (
                <li key={title} className="flex flex-col gap-1 my-6">
                  <h5>{title}</h5>

                  <Date date={date} />

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
    </section>
  );
}
