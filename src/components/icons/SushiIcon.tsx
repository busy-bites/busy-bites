import Image from "next/image";

export default function SushiIcon({
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
      src="/sushi.svg"
      alt="Sushi"
      width={width}
      height={height}
    />
  );
}
