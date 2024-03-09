import Image from "next/image";

export default function NutsIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/nuts.svg"
      alt="Nuts"
      width={55}
      height={55}
    />
  );
}
