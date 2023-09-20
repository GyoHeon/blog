import Image from "next/image";

interface Props {
  values: string[];
}

export function ActionList({ values }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {values.map((value) => (
        <li key={value} className="flex gap-2 items-start">
          <Image src="/icons/Check.svg" width={24} height={24} alt="Check icon" />
          {value}
        </li>
      ))}
    </ul>
  );
}
