import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-500`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
