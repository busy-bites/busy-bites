import Image from "next/image";

export default function TomatoIcon({
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
      src="/tomato.svg"
      alt="tomato"
      width={width}
      height={height}
    />
  );
}
