import Image from "next/image";

export default function MilkIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/fish.svg"
      alt="Milk"
      width={55}
      height={55}
    />
  );
}
