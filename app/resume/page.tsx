import { HeadInfo } from "@/components/resume/HeadInfo";
import { ProjectInfo } from "@/components/resume/ProjectInfo";
import { WorkInfo } from "@/components/resume/WorkInfo";
import { RESUME_ACTIVITIES, RESUME_ETC, RESUME_HEAD, RESUME_OTHER_PROJECTS, RESUME_WORKS } from "@/constants/resume";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GyoHeon's Resume",
  description: "GyoHeon's Resume",
};

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

      <WorkInfo title="Work Experiences" projects={RESUME_WORKS} />

      <WorkInfo title="Other Projects" projects={RESUME_OTHER_PROJECTS} />

      <ProjectInfo title="Activities" projects={RESUME_ACTIVITIES} />

      <section>
        <h2 className="title-resume">ETC</h2>

        <ul>
          {RESUME_ETC.map((etc) => (
            <li key={etc.title}>
              <h4>{etc.title}</h4>
              <ul className="p-2">
                {etc.values.map((item) => (
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
