import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/design/navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Busy Bites",
  description:
    "Busy Bites is a food connection app designed to help students create healthy meal plans, even with busy schedules and limited cooking experience.",
  themeColor: "#FFBE41",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative bg-[#FFFDFB] antialiased", nunito.className)}
      >
        <main className="mx-auto min-h-dvh max-w-md">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
