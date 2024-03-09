import Image from "next/image";

export default function ThumbsUpIcon({
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
      src="/thumbs_up.svg"
      alt="Like"
      width={width}
      height={height}
    />
  );
}
