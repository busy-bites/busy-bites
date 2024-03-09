import { cn } from "@/lib/utils";

export default function DynamicIsland({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-b-3xl bg-secondary p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
