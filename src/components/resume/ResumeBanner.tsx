import Image from "next/image";
import { HeadInfo } from "./HeadInfo";

interface Props {
  name: string;
  image: string;
}

export function ResumeBanner({ image, name }: Props) {
  return (
    <section>
      <h2 className="title-resume text-4xl font-bold">{name}</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <Image className="mx-auto md:mx-0 object-contain" src={image} width={300} height={300} alt={name} />
        <HeadInfo />
      </div>
    </section>
  );
}
