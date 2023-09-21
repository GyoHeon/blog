import { ResumeSection } from "./ResumeSection";

export function ResumeAboutMe({ title, description }: { title: string; description: string }) {
  return (
    <ResumeSection title={title}>
      <p className="whitespace-pre-line">{description}</p>
    </ResumeSection>
  );
}
