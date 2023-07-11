import { RESUME_HEAD } from "@/constants/resume";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full">
      <section>
        <h2 className="text-6xl font-bold">{RESUME_HEAD.name}</h2>
        <div>
          <Image src={RESUME_HEAD.image} width={300} height={300} alt={RESUME_HEAD.name} />
        </div>
      </section>
      <section>{RESUME_HEAD.description}</section>
      <section>hi</section>
      <section>hi</section>
    </main>
  );
}
