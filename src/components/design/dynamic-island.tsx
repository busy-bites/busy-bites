import { cn } from "@/lib/utils";

export default function DynamicIsland({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-b-3xl bg-secondary p-5",
        {
          "bg-secondary": variant === "default",
          "bg-gradient-to-b from-[#FFF5E1] to-[#FFC85F]":
            variant === "gradient",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
