import Image from "next/image";

export default function ThumbsUpRIcon({
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
      src="/thumb_up_r.svg"
      alt="like"
      width={width}
      height={height}
    />
  );
}
