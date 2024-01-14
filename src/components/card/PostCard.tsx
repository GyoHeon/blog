import Image from "next/image";
import Link from "next/link";
import { Date } from "../Date";

type Props = Omit<IMetaData, "tags">;

export function PostCard({ title, date, description, image, slug }: Props) {
  return (
    <article className="card border-2 md:border-transparent md:border-b-4 md:border-b-[--bg--sec]">
      <Link className="flex flex-row md:flex-col w-auto md:h-80" href={slug}>
        <Image
          className="invisible w-0 md:visible md:w-auto md:h-40 object-cover bg-white transition-transform"
          width={400}
          height={400}
          src={image}
          alt={title}
        />

        <div className="min-w-0 ml-4 md:ml-0 p-1">
          <h5 className="card-title">{title}</h5>
          <Date date={date} />
          <p className="mt-2 text-main">{description}</p>
        </div>
      </Link>
    </article>
  );
}
