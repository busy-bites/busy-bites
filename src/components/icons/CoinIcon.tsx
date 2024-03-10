import Image from "next/image";

export default function CoinIcon({
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
      src="/coin.svg"
      alt="coin"
      width={width}
      height={height}
    />
  );
}
