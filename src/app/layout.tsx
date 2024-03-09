import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Busy Bites",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative antialiased", nunito.className)}>
        <main className="min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
