import { SkillTags } from "../tag/SkillTags";
import { ResumeSection } from "./ResumeSection";

export function ResumeSkill({ title, skills }: { title: string; skills: string[] }) {
  return (
    <ResumeSection title={title}>
      <SkillTags stack={skills} />
    </ResumeSection>
  );
}
