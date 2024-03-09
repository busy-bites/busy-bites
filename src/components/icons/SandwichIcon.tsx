import Image from "next/image";

export default function SandwichIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/sandwich.svg"
      alt="Sandwich"
      width={55}
      height={55}
    />
  );
}
