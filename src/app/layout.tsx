import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Music from "@/components/Music";

const HarryFont = localFont({ src: "/HarryP.ttf" });

export const metadata: Metadata = {
  title: "SRISTI 2023 Website",
  description: "create by SRISTI team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Music /> */}
        <NavBar />
        <div className={HarryFont.className}>{children}</div>
      </body>
    </html>
  );
}
