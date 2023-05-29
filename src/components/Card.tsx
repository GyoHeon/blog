interface Props {
  title: string;
  description: string;
  image: string;
}

export function PostCard({ title, description, image }: Props) {
  return (
    <div className="flex flex-col w-64 h-64 m-4 shadow-md shadow-zinc-600">
      <img className="w-64 h-64" src={image} alt={title} />
      <h5 className="mt-4 font-bold">{title}</h5>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}
