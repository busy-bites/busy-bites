import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Avatar({
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
