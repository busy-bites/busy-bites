import { cn } from "@/lib/utils";

export function Coinbar() {
  function Circle({ variant = "color" }: { variant?: "color" | "gray" }) {
    return (
      <div
        className={cn("z-10 h-[18px] w-[17.95px] rounded-full", {
          "bg-secondary": variant === "color",
          "bg-gray-300": variant === "gray",
        })}
      ></div>
    );
  }
  return (
    <div className="relative flex w-full items-center justify-around">
      <Circle />
      <Circle />
      <Circle />
      <Circle variant="gray" />
      <div className="absolute top-1/2 h-[0.5px] w-full -translate-y-1/2 bg-gray-300"></div>
    </div>
  );
}
