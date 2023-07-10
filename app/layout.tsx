import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "GyoHeon's Blog",
  description: "GyoHeon's Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <MainHeader />
        <main className="flex min-h-screen flex-col items-center justify-between p-6 py-12">{children}</main>
        <MainFooter />

        <Analytics />
      </body>
    </html>
  );
}
