import Image from "next/image";

export default function CoffeeCupIcon({
  className,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      className={className}
      src="/coffee_cup.svg"
      alt="Coffee Cup"
      width={width}
      height={height}
    />
  );
}
