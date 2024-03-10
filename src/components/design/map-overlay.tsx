import { Button } from "../ui/button";

export default function MapOverlay({
  food,
  host,
  amount,
  distance,
  image,
  time,
}: {
  image: React.ReactNode;
  food: string;
  host: string;
  amount: string;
  distance: string;
  time: string;
}) {
  return (
    <div className="flex w-fit items-start gap-6 rounded-3xl bg-secondary px-4 py-4">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent">
        {image}
      </div>
      <div>
        <h3 className="mb-2 text-sm font-bold">
          {host}&apos;s {food}
        </h3>
        <p className="text-xs">
          {amount} Avaliable | {distance}km away
        </p>
        <p className="text-xs">
          Reserve before <span className="font-bold">{time}</span>
        </p>
        <div className="mt-4">
          <Button variant="outline">Reserve it now</Button>
        </div>
      </div>
    </div>
  );
}
