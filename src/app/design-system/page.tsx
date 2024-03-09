import { Button } from "@/components/ui/button";
import { Home, Map, ShoppingCart, Smile } from "lucide-react";
import Link from "next/link";

export default function DesignSystem() {
  return (
    <div className="mx-auto max-w-sm space-y-10 bg-gray-200 p-5">
      {/* Button section */}
      <section className="flex gap-5">
        <Button>Button CTA</Button>
        <Button variant="outline">Button CTA</Button>
      </section>
      {/* Typography section */}
      <section>
        <Headline>Hello, Sofia</Headline>
        <Title>Title</Title>
      </section>
      {/* Navbar section */}
      <section className="flex gap-5">
        <Navbar />
      </section>
    </div>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return <h1 className="mb-6 text-3xl font-bold">{children}</h1>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-lg font-bold">{children}</h2>;
}

function Navbar() {
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
