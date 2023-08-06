import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { Analytics } from "@vercel/analytics/react";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "GyoHeon's Blog",
  description: "GyoHeon's Blog",
};

const font = Nunito_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={font.className}>
      <body>
        <MainHeader />
        <main className="flex min-h-screen flex-col items-center gap-10 px-6 py-12 pt-32">{children}</main>
        <MainFooter />

        <Analytics />
      </body>
    </html>
  );
}
