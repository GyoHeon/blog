import { RESUME_HEAD } from "@/constants/resume";

export function HeadInfo() {
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
