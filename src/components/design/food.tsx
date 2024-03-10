import { cn } from "@/lib/utils";

export function FoodItem({ children }: { children: React.ReactNode }) {
  return (
    <button className="group flex h-[74px] w-[74px] items-center justify-center rounded-full bg-primary">
      {children}
    </button>
  );
}

export function FoodButton({
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

export function SelectableFoodButton({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-[74px] w-[74px] items-center justify-center rounded-full bg-accent transition-all hover:ring-[3px] hover:ring-orange-600",
        {
          "ring-[3px] ring-orange-600": selected,
        },
      )}
    >
      {children}
    </button>
  );
}
