import { Home, Map, ShoppingCart, Smile } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-center bg-[#FFFDFB] py-4 shadow-md">
      <ul className="flex w-full justify-evenly gap-5">
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
