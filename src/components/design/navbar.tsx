"use client";

import { Home, Map, ShoppingCart, Smile } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0  w-full justify-center bg-[#FFFDFB] py-4">
      <ul className="mx-auto flex w-full max-w-md justify-evenly gap-5">
        <li>
          <Link href="#">
            <Home className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Map className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <ShoppingCart className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Smile className="stroke-gray-500 hover:stroke-black" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
