import AccentCard from "@/components/design/accent-card";
import MapPreview from "@/components/design/map-preview";
import MenuItem from "@/components/design/menu-item";
import { Headline, Title } from "@/components/design/typography";
import RamenIcon from "@/components/icons/RamenIcon";
import SaladIcon from "@/components/icons/SaladIcon";
import SandwichIcon from "@/components/icons/SandwichIcon";
import SoupIcon from "@/components/icons/SoupIcon";
import SushiIcon from "@/components/icons/SushiIcon";
import Link from "next/link";

const menuItems = [
  { food: "Sandwich", icon: <SandwichIcon width={55} height={55} /> },
  { food: "Ramen", icon: <RamenIcon /> },
  { food: "Sushi", icon: <SushiIcon /> },
  { food: "Salad", icon: <SaladIcon /> },
];

export default function Home() {
  return (
    <div className="px-4 pt-14">
      <Headline> Good Appetite, Sofia</Headline>
      <section>
        <Title>Today&apos;s Special</Title>
        <AccentCard
          image={<SoupIcon width={147.8} height={101.63} />}
          title="Fresh Tomato Soup"
          description="Jenny | Reserve By 3pm "
        />
      </section>
      <section className="mt-6">
        <Title>Today&apos;s Menu</Title>
        <div className="flex gap-5">
          {menuItems.map((item) => (
            <MenuItem key={item.food} {...item} />
          ))}
        </div>
      </section>
      <section className="mt-6">
        <Link href="/map">
          <Title>Hosts Near Me</Title>
          <MapPreview />
        </Link>
      </section>
    </div>
  );
}
