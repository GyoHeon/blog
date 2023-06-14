import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function PostCard({ title, description, image, slug }: Props) {
  return (
    <article className="border-b-4 border-b-[--text--sec] overflow-hidden">
      <Link className="flex flex-row md:flex-col w-auto h-56 md:h-80" href={slug}>
        <Image
          className="w-60 md:w-auto md:h-40 object-cover hover:scale-105 transition-transform"
          width={400}
          height={400}
          src={image}
          alt={title}
        />

        <div className="w-full ml-4 md:ml-0 p-1">
          <h5 className="mt-2 md:mt-4 font-bold">{title}</h5>
          <p className="mt-2 text-main">{description}</p>
        </div>
      </Link>
    </article>
  );
}
