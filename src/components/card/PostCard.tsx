import Image from "next/image";
import Link from "next/link";
import { Date } from "../Date";

type Props = Omit<IMetaData, "tags">;

export function PostCard({ title, date, description, image, slug }: Props) {
  return (
    <article className="card border-2 border-transparent border-b-4 border-b-[--border] hover:border-[--blue]  transition-colors">
      <Link className="flex flex-row md:flex-col w-auto h-56 md:h-80" href={slug}>
        <Image
          className="w-60 md:w-auto md:h-40 object-cover transition-transform"
          width={400}
          height={400}
          src={image}
          alt={title}
        />

        <div className="min-w-0 ml-4 md:ml-0 p-1">
          <h5 className="mt-2 md:mt-4 font-bold truncate">{title}</h5>
          <Date date={date} />
          <p className="mt-2 text-main">{description}</p>
        </div>
      </Link>
    </article>
  );
}
