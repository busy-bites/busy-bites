import Image from "next/image";

export default function SoupIcon({
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
      src="/soup.svg"
      alt="Soup"
      width={width}
      height={height}
    />
  );
}
