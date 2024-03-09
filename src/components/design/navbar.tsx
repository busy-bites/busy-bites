"use client";

import { Home, Map, ShoppingCart, Smile } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0  z-10 w-full justify-center">
      <ul className="mx-auto flex w-full max-w-md justify-evenly gap-5 border-t bg-[#FFFDFB] py-4">
        <li>
          <Link href="/">
            <Home className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="/map">
            <Map className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="/order">
            <ShoppingCart className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <Smile className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
