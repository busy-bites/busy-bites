import Image from "next/image";

export default function GlutenIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/gluten.svg"
      alt="gluten"
      width={55}
      height={55}
    />
  );
}
