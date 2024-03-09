import Image from "next/image";

export default function PeachIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/peach.svg"
      alt="peach"
      width={55}
      height={55}
    />
  );
}
