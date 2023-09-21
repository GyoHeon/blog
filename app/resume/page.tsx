import { ProjectInfo } from "@/components/resume/ProjectInfo";
import { ResumeAboutMe } from "@/components/resume/ResumeAboutMe";
import { ResumeBanner } from "@/components/resume/ResumeBanner";
import { ResumeETC } from "@/components/resume/ResumeETC";
import { ResumeSkill } from "@/components/resume/ResumeSkill";
import { WorkInfo } from "@/components/resume/WorkInfo";
import {
  RESUME_ACTIVITIES,
  RESUME_ETC,
  RESUME_HEAD,
  RESUME_OTHER_PROJECTS,
  RESUME_SKILLS,
  RESUME_WORKS,
} from "@/constants/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GyoHeon's Resume",
  description: "GyoHeon's Resume",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full md:w-[700px]">
      <ResumeBanner {...RESUME_HEAD} />

      <ResumeAboutMe {...RESUME_HEAD} />

      <ResumeSkill {...RESUME_SKILLS} />

      <WorkInfo title="Work Experiences" projects={RESUME_WORKS} />

      <WorkInfo title="Other Projects" projects={RESUME_OTHER_PROJECTS} />

      <ProjectInfo title="Activities" projects={RESUME_ACTIVITIES} />

      <ResumeETC {...RESUME_ETC} />
    </main>
  );
}
