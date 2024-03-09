import { Button } from "@/components/ui/button";
import { FoodButton, FoodItem } from "@/components/design/food";
import MilkIcon from "@/components/icons/MilkIcon";
import Navbar from "@/components/design/navbar";
import AddButton from "@/components/design/add-button";
import { Headline, Title } from "@/components/design/typography";
import Avatar from "@/components/design/avatar";
import MenuOverlay from "@/components/design/menu-overlay";
import SandwichIcon from "@/components/icons/SandwichIcon";

export default function DesignSystem() {
  return (
    <div className="mx-auto max-w-sm space-y-10 bg-gray-200 p-5">
      {/* Button section */}
      <section className="flex gap-5">
        <Button>Button CTA</Button>
        <Button variant="outline">Button CTA</Button>
      </section>
      {/* Typography section */}
      <section>
        <Headline>Hello, Sofia</Headline>
        <Title>Title</Title>
      </section>
      {/* Navbar section */}
      <section className="flex gap-5">
        <Navbar />
      </section>
      {/* Food section */}
      <section className="flex gap-5">
        <FoodItem>
          <MilkIcon />
        </FoodItem>
        <FoodButton>
          <MilkIcon className="transition-opacity group-hover:opacity-30" />
        </FoodButton>
        <FoodButton variant="outline">
          <MilkIcon />
        </FoodButton>
      </section>
      {/* Add section */}
      <section className="flex gap-5">
        <AddButton />
        <AddButton variant="other" />
      </section>
      {/* Avatar section */}
      <section className="flex gap-5">
        <Avatar />
        <Avatar variant="outline" />
        <Avatar variant="yellow-bg" />
      </section>
      <section>
        <MenuOverlay
          image={<SandwichIcon />}
          food="Sandwich"
          host="Jenny"
          distance="1"
        />
      </section>
      <section>
        <AccentCard
          title="Fresh Tomato Soup"
          description="Jenny | Reserve By 3pm "
        />
      </section>
    </div>
  );
}

function AccentCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl bg-accent p-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs font-semibold">{description}</p>
      </div>
    </article>
  );
}
