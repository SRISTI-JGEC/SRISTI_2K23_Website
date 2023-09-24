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
<<<<<<< HEAD
    <body>
      <NavBar />
      <div className={`${inter.className}`}>
=======
      <body className={`${inter.className} scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-500`}>
        <NavBar />
>>>>>>> 3ca2e3a161ff17372e13ce1857bae6a2104457a5
        {children}
      </div>
    </body>
  </html>
  );
}
