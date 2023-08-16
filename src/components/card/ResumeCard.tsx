import Image from "next/image";
import Link from "next/link";

type Props = Omit<IMetaData, "tags">;

export function ResumeCard({ title, description, image, slug }: Props) {
  return (
    <article className="md:col-span-2 lg:col-span-3 h-56 hover-card overflow-hidden w-full border-2 border-transparent border-b-[--bg--sec]">
      <Link className="flex flex-row w-auto h-full" href={slug}>
        <Image
          className="w-60 h-50 object-cover transition-transform"
          width={400}
          height={400}
          src={image}
          alt={title}
        />

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
