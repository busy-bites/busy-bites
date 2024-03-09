import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export default function AddButton({
  variant = "default",
}: {
  variant?: "default" | "other";
}) {
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
