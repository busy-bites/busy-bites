import { Button } from "@/components/ui/button";
import { FoodButton, FoodItem } from "@/components/design/food";
import MilkIcon from "@/components/icons/MilkIcon";
import Navbar from "@/components/design/navbar";
import AddButton from "@/components/design/add-button";
import { Headline, Title } from "@/components/design/typography";
import Avatar from "@/components/design/avatar";

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
    </div>
  );
}
