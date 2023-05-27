import Image from "next/image";
import Link from "next/link";
import { HEADER_MENUS } from "../../constants/urls";
import { ThemeButton } from "./button/ThemeButton";

export function Header() {
  return (
    <header className="neumo w-full h-20 px-4 py-2">
      <ul className="flex items-center gap-2.5 h-full">
        <li className="px-2 shadow-[4px_4px_8px_#0a0a0b,-4px_-4px_8px_#26262b] rounded-lg bg-zinc-800 hover:">
          <Link href="/" className="flex items-center gap-0.5 px-0 py-0.5 text-xl hover:text-[--orange]">
            <h1>
              <Image
                className="md:w-[50px] md:h-[50px]"
                src="/image/gear.png"
                width="25"
                height="25"
                alt="Front-End Developer GyoHeon's Blog Logo"
              />
            </h1>
            Home
          </Link>
        </li>
        {HEADER_MENUS.map((menu) => (
          <li key={menu.name}>
            <Link href={menu.url} className="text-xl hover:text-[--orange]">
              {menu.name}
            </Link>
          </li>
        ))}
        <li className="ml-auto">
          <ThemeButton />
        </li>
      </ul>
    </header>
  );
}
