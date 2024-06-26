import { RESUME_HEAD } from "@/constants/resume";

export function HeadInfo() {
  return (
    <ul className="flex flex-col mt-10 md:mt-0 border-b-[1px] border-white">
      {RESUME_HEAD.information.map(({ title, value }) => {
        const isLink = value.startsWith("https");

        return (
          <li key={title} className="flex gap-4 items-center py-1 border-t-[1px] border-white">
            <h6 className="w-32 md:w-20 my-[0.25em] text-end text-[--blue]">{title}</h6>
            {isLink ? (
              <a className="border-link" href={value}>
                {value}
              </a>
            ) : (
              <span>{value}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
