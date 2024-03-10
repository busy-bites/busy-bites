"use client";

import { cn } from "@/lib/utils";
import { Home, Map, ShoppingCart, Smile } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0  z-10 w-full justify-center">
      <ul className="mx-auto flex w-full max-w-md justify-evenly gap-5 border-t bg-[#FFFDFB] py-4">
        <li>
          <Link href="/">
            <Home
              className={cn({
                "stroke-gray-500 hover:stroke-black": pathname !== "/",
                "stroke-secondary": pathname === "/",
              })}
            />
          </Link>
        </li>
        <li>
          <Link href="/map">
            <Map
              className={cn({
                "stroke-gray-500 hover:stroke-black": pathname !== "/map",
                "stroke-secondary": pathname === "/map",
              })}
            />
          </Link>
        </li>
        <li>
          <Link href="/order">
            <ShoppingCart
              className={cn({
                "stroke-gray-500 hover:stroke-black": pathname !== "/order",
                "stroke-secondary": pathname === "/order",
              })}
            />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <Smile
              className={cn({
                "stroke-gray-500 hover:stroke-black": pathname !== "/profile",
                "stroke-secondary": pathname === "/profile",
              })}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
