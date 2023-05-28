import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "GyoHeon's Blog",
  description: "GyoHeon's Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>GyoHeon&apos;s Blog</title>
        <meta name="description" content="GyoHeon's Blog" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
