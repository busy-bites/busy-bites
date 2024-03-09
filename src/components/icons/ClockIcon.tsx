import Image from "next/image";

export default function ClockIcon({
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
      src="/clock.svg"
      alt="clock"
      width={width}
      height={height}
    />
  );
}
