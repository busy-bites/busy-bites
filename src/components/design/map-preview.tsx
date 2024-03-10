import Image from "next/image";

export default function MapPreview() {
  return (
    <Image
      src="/map_preview.png"
      alt="map_preview"
      className="mx-auto w-full rounded-3xl"
      quality={100}
      width={342}
      height={190}
    />
  );
}
