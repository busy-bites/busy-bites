import MilkIcon from "@/components/icons/MilkIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Map, Plus, ShoppingCart, Smile } from "lucide-react";
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
      {/* Food section */}
      <section className="flex gap-5">
        <FoodItem>
          <MilkIcon />
        </FoodItem>
        <FoodButton>
          <MilkIcon className="transition-opacity group-hover:opacity-30" />
        </FoodButton>
        <FoodButton variant="outline">
          <MilkIcon />
        </FoodButton>
      </section>
      {/* Add section */}
      <section className="flex gap-5">
        <AddButton />
        <AddButton variant="other" />
      </section>
      {/* Avatar section */}
      <section className="flex gap-5">
        <Avatar />
        <Avatar variant="outline" />
        <Avatar variant="yellow-bg" />
      </section>
    </div>
  );
}

import Image from "next/image";

function Avatar({
  variant = "default",
}: {
  variant?: "default" | "yellow-bg" | "outline";
}) {
  return (
    <Image
      src="/avatar.png"
      alt="Sofia"
      quality={100}
      width={62}
      height={62}
      className={cn({
        "rounded-lg border-2 border-accent": variant === "outline",
        "rounded-xl bg-[#FFBE41]": variant === "yellow-bg",
      })}
    />
  );
}

function AddButton({ variant = "default" }: { variant?: "default" | "other" }) {
  return (
    <button
      className={cn(
        "group flex h-[74px] w-[74px] items-center justify-center rounded-full",
        {
          "bg-primary": variant === "default",
          "bg-accent": variant === "other",
        },
      )}
    >
      <Plus
        className={cn({
          "stroke-secondary": variant === "default",
          "stroke-primary": variant === "other",
        })}
      />
    </button>
  );
}

function FoodItem({ children }: { children: React.ReactNode }) {
  return (
    <button className="group flex h-[74px] w-[74px] items-center justify-center rounded-full bg-primary">
      {children}
    </button>
  );
}

function FoodButton({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <button
      className={cn({
        "flex h-[74px] w-[74px] items-center justify-center rounded-full bg-accent transition-all hover:ring-[3px] hover:ring-orange-600":
          variant === "outline",
        "group flex h-[74px] w-[74px] items-center justify-center rounded-full bg-primary transition-colors":
          variant === "default",
      })}
    >
      {children}
      {variant === "default" && (
        <span className="absolute text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100">
          Remove
        </span>
      )}
    </button>
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
