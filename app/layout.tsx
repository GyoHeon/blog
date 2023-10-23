import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "GyoHeon's Blog",
  description: "GyoHeon's Blog",
};

const font = Nunito_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={font.className}>
      <body>
        <MainHeader />
        <main className="flex flex-col items-center gap-10 px-6 py-12">{children}</main>
        <MainFooter />

        <Analytics />
      </body>
    </html>
  );
}
