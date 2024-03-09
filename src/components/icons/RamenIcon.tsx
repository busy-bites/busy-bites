import Image from "next/image";

export default function RamenIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/pasta.svg"
      alt="ramen"
      width={60}
      height={45}
    />
  );
}
