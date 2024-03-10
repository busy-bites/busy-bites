import Image from "next/image";

export default function RamenIcon({
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
      src="/pasta.svg"
      alt="ramen"
      width={width}
      height={height}
    />
  );
}
