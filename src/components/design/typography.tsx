import { cn } from "@/lib/utils";

export function Headline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("mb-6 text-3xl font-bold", className)}>{children}</h1>
  );
}

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-4 text-lg font-bold", className)}>{children}</h2>
  );
}
