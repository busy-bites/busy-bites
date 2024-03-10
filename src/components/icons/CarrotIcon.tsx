import Image from "next/image";

export default function CarrotIcon({
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
      src="/carrot.svg"
      alt="Carrot"
      width={width}
      height={height}
    />
  );
}
