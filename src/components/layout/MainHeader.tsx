import { HEADER_MENUS } from "@/constants/urls";
import Image from "next/image";
import Link from "next/link";

export function MainHeader() {
  return (
    <header className="w-full h-20 px-4 py-2 border-b-2 border-[--orange]">
      <ul className="flex items-center gap-5 h-full">
        <li className="mr-auto px-2 rounded-lg">
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
        <li>{/* <ThemeButton /> */}</li>
      </ul>
    </header>
  );
}
