export default function MenuOverlay({
  food,
  host,
  distance,
  image,
}: {
  image: React.ReactNode;
  food: string;
  host: string;
  distance: string;
}) {
  return (
    <div className="flex w-fit items-center gap-6 rounded-3xl bg-secondary px-4 py-2">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent">
        {image}
      </div>
      <div>
        <h3 className="text-sm font-bold">{food}</h3>
        <p className="text-xs">
          {host} | {distance}km away
        </p>
      </div>
    </div>
  );
}
