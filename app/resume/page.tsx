import { Date } from "@/components/Date";
import { RESUME_ACTIVITIES, RESUME_ETC, RESUME_HEAD, RESUME_OTHER_PROJECTS, RESUME_WORKS } from "@/constants/resume";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GyoHeon's Resume",
  description: "GyoHeon's Resume",
};

function HeadInfo() {
  return (
    <ul className="flex flex-col mt-10 md:mt-0 border-b-[1px] border-white">
      {RESUME_HEAD.information.map((info) => (
        <li key={info.title} className="flex gap-4 items-center py-1 border-t-[1px] border-white">
          <h6 className="w-32 md:w-20 my-[0.25em] text-end text-[--blue]">{info.title}</h6>
          <a>{info.value}</a>
        </li>
      ))}
    </ul>
  );
}

function ProjectInfo({ title, projects }: { title: string; projects: typeof RESUME_WORKS }) {
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

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full md:w-[700px]">
      <section>
        <h2 className="title-resume text-4xl font-bold">{RESUME_HEAD.name}</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            className="mx-auto md:mx-0 object-contain"
            src={RESUME_HEAD.image}
            width={300}
            height={300}
            alt={RESUME_HEAD.name}
          />
          <HeadInfo />
        </div>
      </section>

      <section>
        <h2 className="title-resume">About Me</h2>

        <p className="whitespace-pre-line">{RESUME_HEAD.description}</p>
      </section>

      <ProjectInfo title="Work Experiences" projects={RESUME_WORKS} />

      <ProjectInfo title="Other Projects" projects={RESUME_OTHER_PROJECTS} />

      <section>
        <h2 className="title-resume">Activities</h2>

        <ul>
          {RESUME_ACTIVITIES.map((activity) => (
            <li key={activity.title} className="flex flex-col gap-1 pb-2 border-b border-neutral-700">
              <h4>{activity.title}</h4>
              <Date date={activity.date} />
              <span className="ml-2">{activity.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="title-resume">ETC</h2>

        <ul>
          {RESUME_ETC.map((etc) => (
            <li key={etc.title}>
              <h4>{etc.title}</h4>
              <ul className="p-2">
                {etc.value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
