import Image from "next/image";

export default function SaladIcon({
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
      src="/salad.svg"
      alt="salad"
      width={width}
      height={height}
    />
  );
}
