import Image from "next/image";

export default function CaffineIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/caffine.svg"
      alt="caffine"
      width={55}
      height={55}
    />
  );
}
