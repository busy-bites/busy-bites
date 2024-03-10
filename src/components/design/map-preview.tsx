import Image from "next/image";

export default function MapPreview() {
  return (
    <Image
      src="/map-preview.png"
      alt="map-preview"
      className="mx-auto w-full rounded-3xl shadow-md"
      quality={100}
      width={342}
      height={190}
    />
  );
}
