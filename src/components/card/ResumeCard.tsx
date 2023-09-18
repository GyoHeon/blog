import { MY_INFO } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";

export function ResumeCard() {
  const { title, description, image, slug } = MY_INFO;

  return (
    <article className="md:col-span-2 lg:col-span-3 md:h-32 hover-card border-2 overflow-hidden w-full rounded-full">
      <Link className="flex flex-row w-auto h-full" href={slug}>
        <Image className="md:w-32 md:h-32 object-cover rounded-full" width={128} height={64} src={image} alt={title} />

        <div className="min-w-0 ml-4 p-1">
          <h5 className="mt-2 md:mt-4 font-bold truncate border-link">{title}</h5>

          <p
            className="mt-2 text-main break-keep whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Link>
    </article>
  );
}
