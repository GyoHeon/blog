interface Props {
  title: string;
  description: string;
  image: string;
}

export function PostCard({ title, description, image }: Props) {
  return (
    <article className="flex flex-col w-auto lg:w-64 lg:h-96 border-b-4 border-b-[--text--sec]">
      <img className="w-auto lg:w-64 h-80 lg:h-44 object-cover" src={image} alt={title} />
      <div className="p-3">
        <h5 className="mt-4 font-bold">{title}</h5>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </article>
  );
}
