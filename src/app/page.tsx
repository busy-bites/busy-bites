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
  { id: 2, food: "Sandwich", icon: <SandwichIcon width={55} height={55} /> },
  { id: 3, food: "Ramen", icon: <RamenIcon width={60} height={45} /> },
  {
    id: 4,
    food: "Sushi",
    icon: <SushiIcon width={46} height={46} className="mt-3" />,
  },
  { id: 5, food: "Salad", icon: <SaladIcon width={66} height={62} /> },
];

export default function Home() {
  return (
    <div className="px-4 pb-[100px] pt-14">
      <Headline> Good Appetite, Sofia</Headline>
      <section>
        <Title>Today&apos;s Special</Title>
        <Link href="/menu-item/1?host=Jenny&distance=2&special=true">
          <AccentCard>
            <div>
              <h3 className="text-lg font-semibold">Fresh Tomato Soup</h3>
              <p className="text-sm font-semibold text-gray-700">
                Jenny | Reserve By 3pm
              </p>
            </div>
            <SoupIcon width={147.8} height={101.63} />
          </AccentCard>
        </Link>
      </section>
      <section className="mt-6">
        <Title>Today&apos;s Menu</Title>
        <div className="flex gap-5">
          {menuItems.map((item) => (
            <Link
              href={`/menu-item/${item.id}?host=Jerry&distance=2`}
              key={item.food}
            >
              <MenuItem {...item} />
            </Link>
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
