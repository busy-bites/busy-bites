import Image from "next/image";

export default function SushiIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/sushi.svg"
      alt="Sushi"
      width={46}
      height={46}
    />
  );
}
