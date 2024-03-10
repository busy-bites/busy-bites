import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MapOverlay({
  food,
  host,
  amount,
  distance,
  image,
  time,
  link,
  selected,
}: {
  selected: boolean;
  image: React.ReactNode;
  food: string;
  host: string;
  amount: string;
  distance: string;
  time: string;
  link: string;
}) {
  return (
    <div
      className={cn(
        "flex w-fit cursor-pointer items-start gap-6 rounded-3xl px-4 py-4 transition-colors duration-300",
        {
          "bg-secondary": selected,
          "bg-accent": !selected,
        },
      )}
    >
      <div
        className={cn(
          "flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent transition-colors duration-300",
          {
            "bg-secondary": !selected,
            "bg-accent": selected,
          },
        )}
      >
        {image}
      </div>
      <div>
        <h3 className="mb-2 text-sm font-bold">
          {host}&apos;s {food}
        </h3>
        <p className="text-xs">
          {amount} Avaliable | {distance} km away
        </p>
        <p className="text-xs">
          Reserve before <span className="font-bold">{time}</span>
        </p>
        <div className="mt-4">
          <Link href={link}>
            <Button variant="outline">Reserve it now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
