import Image from "next/image";

export default function PeanutIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/peanut.svg"
      alt="Peanut"
      width={55}
      height={55}
    />
  );
}
