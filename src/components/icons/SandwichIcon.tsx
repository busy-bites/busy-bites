import Image from "next/image";

export default function SandwichIcon({
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
      src="/sandwich.svg"
      alt="Sandwich"
      width={width}
      height={height}
    />
  );
}
