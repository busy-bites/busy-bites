import AccentCard from "@/components/design/accent-card";
import { Headline, Title } from "@/components/design/typography";
import SoupIcon from "@/components/icons/SoupIcon";

export default function Home() {
  return (
    <main className="mx-auto min-h-dvh max-w-[375px] bg-[#FFFDFB] px-4 pt-14">
      <Headline> Good Appetite, Sofia</Headline>
      <Title>Today&apos;s Special</Title>
      <AccentCard
        image={<SoupIcon width={147.8} height={101.63} />}
        title="Fresh Tomato Soup"
        description="Jenny | Reserve By 3pm "
      />
    </main>
  );
}
