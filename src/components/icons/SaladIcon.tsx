import Image from "next/image";

export default function SaladIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/salad.svg"
      alt="salad"
      width={66}
      height={62}
    />
  );
}
