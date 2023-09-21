import Image from "next/image";

interface Props {
  title: string;
  link?: string;
}

export function ProjectHeader({ title, link }) {
  return (
    <header className="flex gap-3 items-end">
      <h4>{title}</h4>
      {link && (
        <a className="flex mb-4 md:mb-2 border-link" href={link}>
          <Image src="/icons/Link.svg" width={24} height={24} alt="Link icon" />
          Link
        </a>
      )}
    </header>
  );
}
