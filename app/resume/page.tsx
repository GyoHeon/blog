import { RESUME_HEAD } from "@/constants/resume";
import Image from "next/image";

function HeadInfo() {
  return (
    <ul className="flex flex-col mt-10 md:mt-0 border-b-[1px] border-white">
      {RESUME_HEAD.information.map((info) => (
        <li key={info.title} className="flex gap-4 items-center py-1 border-t-[1px] border-white">
          <h6 className="w-32 md:w-20 text-end text-[--blue]">{info.title}</h6>
          <a>{info.value}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:w-96">
      <section>
        <h2 className="title-resume text-4xl font-bold">{RESUME_HEAD.name}</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <Image src={RESUME_HEAD.image} width={300} height={300} alt={RESUME_HEAD.name} />
          <HeadInfo />
        </div>
      </section>

      <section>
        <h2 className="title-resume">About Me</h2>

        <p>{RESUME_HEAD.description}</p>
      </section>
      <section>hi</section>
      <section>hi</section>
    </main>
  );
}
