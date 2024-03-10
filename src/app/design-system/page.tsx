import { Button } from "@/components/ui/button";
import { FoodButton, FoodItem } from "@/components/design/food";
import MilkIcon from "@/components/icons/MilkIcon";
import Navbar from "@/components/design/navbar";
import AddButton, { OtherAddButton } from "@/components/design/add-button";
import { Headline, Title } from "@/components/design/typography";
import Avatar from "@/components/design/avatar";
import MenuOverlay from "@/components/design/menu-overlay";
import SandwichIcon from "@/components/icons/SandwichIcon";
import AccentCard from "@/components/design/accent-card";
import SoupIcon from "@/components/icons/SoupIcon";
import RamenIcon from "@/components/icons/RamenIcon";
import SushiIcon from "@/components/icons/SushiIcon";
import SaladIcon from "@/components/icons/SaladIcon";
import MenuItem from "@/components/design/menu-item";
import EggIcon from "@/components/icons/EggIcon";
import GlutenIcon from "@/components/icons/GlutenIcon";
import { Coinbar } from "@/components/design/coinbar";

import MapPreview from "@/components/design/map-preview";
import ThumbsUpIcon from "@/components/icons/ThumbsUpIcon";
import MapOverlay from "@/components/design/map-overlay";
import { rewards } from "@/data/data";
import RewardItem from "@/components/design/reward-item";

export default function DesignSystem() {
  const menuItems = [
    { food: "Sandwich", icon: <SandwichIcon width={55} height={55} /> },
    { food: "Ramen", icon: <RamenIcon /> },
    { food: "Sushi", icon: <SushiIcon /> },
    { food: "Salad", icon: <SaladIcon /> },
  ];

  const allergies = [
    { food: "Milk", icon: <MilkIcon /> },
    { food: "Egg", icon: <EggIcon /> },
    { food: "Gluten", icon: <GlutenIcon /> },
  ];
  return (
    <div className="mx-auto mb-20 max-w-md space-y-10 bg-gray-100 p-5">
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
        {/* <AddButton /> */}
        <OtherAddButton />
      </section>
      {/* Avatar section */}
      <section className="flex gap-5">
        <Avatar />
        <Avatar variant="outline" />
        <Avatar variant="yellow-bg" />
      </section>
      {/* Menu overlay section */}
      <section>
        <MenuOverlay
          image={<SandwichIcon width={55} height={55} />}
          food="Sandwich"
          host="Jenny"
          distance="1"
        />
      </section>
      {/* Map overlay section */}
      <section>
        <MapOverlay
          amount="5"
          image={<SandwichIcon width={57.5} height={57.5} />}
          food="Ramen"
          host="Jenny"
          distance="1"
          time="3pm"
        />
      </section>

      {/* Accent card section */}
      <section>
        <AccentCard
          image={<SoupIcon width={147.8} height={101.63} />}
          title="Fresh Tomato Soup"
          description="Jenny | Reserve By 3pm "
        />
      </section>
      {/* Menu item section */}
      <section>
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <MenuItem key={item.food} {...item} />
          ))}
        </div>
      </section>
      {/* Allergies item section */}
      <section className="flex gap-6">
        {allergies.map((item) => (
          <MenuItem key={item.food} {...item} />
        ))}
      </section>
      {/* Coinbar section */}
      <section>
        <Coinbar />
      </section>
      <section>
        <MapPreview />
      </section>
      <section>
        <ThumbsUpIcon width={123.36} height={105} />
      </section>
      <section className="grid grid-cols-2 gap-2">
        <RewardItem reward={rewards[0]} />
        <RewardItem reward={rewards[1]} />
      </section>
    </div>
  );
}
