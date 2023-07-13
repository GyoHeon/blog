import { RESUME_ETC, RESUME_HEAD, RESUME_WORK } from "@/constants/resume";
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
    <main className="flex flex-col gap-12 w-full md:w-[700px]">
      <section>
        <h2 className="title-resume text-4xl font-bold">{RESUME_HEAD.name}</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <Image src={RESUME_HEAD.image} width={300} height={300} alt={RESUME_HEAD.name} />
          <HeadInfo />
        </div>
      </section>

      <section>
        <h2 className="title-resume">About Me</h2>

        <p className="whitespace-pre-line">{RESUME_HEAD.description}</p>
      </section>
      <section>
        <h2 className="title-resume">Work Experiences</h2>

        <ul>
          {RESUME_WORK.map((work) => (
            <li key={work.title} className="flex flex-col gap-2">
              <h4>{work.title}</h4>
              <span>{work.date}</span>
              <span>{work.description}</span>

              <span>Stack</span>
              <ul className="flex gap-2">
                {work.stack.map((stack) => (
                  <li key={stack} className="tag">
                    {stack}
                  </li>
                ))}
              </ul>

              <ul>
                {work.works.map((item) => (
                  <li key={item.title}>
                    <h5>{item.title}</h5>
                    <span>{item.date}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="title-resume">Other Project</h2>
      </section>
      <section>
        <h2 className="title-resume">Activity</h2>
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
