import Image from "next/image";

export default function EggIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/egg.svg"
      alt="egg"
      width={55}
      height={55}
    />
  );
}
