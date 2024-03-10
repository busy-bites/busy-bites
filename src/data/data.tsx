import CarrotIcon from "@/components/icons/CarrotIcon";
import CoffeeCupIcon from "@/components/icons/CoffeeCupIcon";
import SandwichIcon from "@/components/icons/SandwichIcon";
import SoupIcon from "@/components/icons/SoupIcon";

export const menu = [
  {
    id: 1,
    icon: <SoupIcon width={311} height={215} />,
    reserveIcon: <SoupIcon width={173.14} height={119.7} />,
    description: `Discover the warmth of my homemade tomato soup, a comforting blend
              of ripe tomatoes, fragrant herbs, and a hint of sweetness!`,
    food: "Fresh Tomato Soup",
    contains: ["Milk", "Gluten"],
    mayContain: ["Nuts"],
  },
  {
    id: 2,
    icon: <SandwichIcon width={222.57} height={222.57} />,
    reserveIcon: <SandwichIcon width={140} height={140} />,
    description: `Delight in my Belt Sandwich—a symphony of crispy bacon, fresh eggs, and vibrant veggies hugged by golden toast. Experience a burst of flavors curated for the ultimate satisfaction in every bite.`,
    food: "BLT Sandwich",
    contains: ["Milk", "Gluten"],
    mayContain: ["Nuts", "Soy"],
  },
  {
    id: 3,
    icon: <RamenIcon width={222.57} height={222.57} />,
    reserveIcon: <RamenIcon width={140} height={140} />,
    description: `Savor the warmth and richness of our signature ramen bowl. Immerse yourself in a symphony of handcrafted noodles, flavorful broth, and an array of fresh toppings. Elevate your comfort food experience with each spoonful of our delicious ramen.`,
    food: "Ramen",
    contains: ["Milk", "Gluten"],
    mayContain: ["Nuts", "Soy"],
  },
  {
    id: 4,
    icon: <SushiIcon width={222.57} height={222.57} />,
    reserveIcon: <SushiIcon width={140} height={140} />,
    description: `Our rolls are a dance of fresh fish, creamy avocado, and crisp seaweed, all artfully crafted for an explosion of flavors in every bite. Savor a burst of meticulously curated flavors for the ultimate satisfaction in every bite!`,
    food: "Calfornia Roll Sushi",
    contains: ["Peanuts", "Gluten"],
    mayContain: ["Nuts", "Soy", "Milk"],
  },
  {
    id: 5,
    icon: <SaladIcon width={222.57} height={222.57} />,
    reserveIcon: <SaladIcon width={140} height={140} />,
    description: `Crisp greens, juicy tomatoes, and an assortment of garden delights, all tossed in a zesty dressing. A burst of health and flavor awaits in every refreshing bite."`,
    food: "Caesar Salad",
    contains: ["Nuts", "Peanuts"],
    mayContain: ["Soy"],
  },
];

export const rewards = [
  {
    id: "fresh-ingredients",
    icon: <CarrotIcon width={140} height={140} className="mx-auto" />,
    title: "Fresh Ingredients",
    description: (
      <p className="pt-4">
        Receive a bag of <span className="font-bold">fresh vegetables</span> of
        your choice at BCIT Food Pantry.
      </p>
    ),
  },
  {
    id: "giftcard",
    icon: <CoffeeCupIcon width={140} height={140} className="mx-auto" />,
    title: "BCIT Stand Gift Card",
    description: (
      <p className="pt-4">
        Enjoy a <span className="font-bold">$10 Gift Card</span> redeemable at
        the BCIT Stand for any food and drinks.
      </p>
    ),
  },
];

import EggIcon from "@/components/icons/EggIcon";
import GlutenIcon from "@/components/icons/GlutenIcon";
import MilkIcon from "@/components/icons/MilkIcon";
import FishIcon from "@/components/icons/FishIcon";
import PeanutIcon from "@/components/icons/PeanutIcon";
import NutsIcon from "@/components/icons/NutsIcon";
import PeachIcon from "@/components/icons/PeachIcon";
import CaffineIcon from "@/components/icons/CaffineIcon";
import SushiIcon from "@/components/icons/SushiIcon";
import RamenIcon from "@/components/icons/RamenIcon";
import SaladIcon from "@/components/icons/SaladIcon";

export type Allergy = {
  food: string;
  icon: JSX.Element;
  selected: boolean;
};

export const allergies: Allergy[] = [
  { food: "Milk", icon: <MilkIcon />, selected: true },
  { food: "Egg", icon: <EggIcon />, selected: true },
  { food: "Fish", icon: <FishIcon />, selected: false },
  { food: "Gluten", icon: <GlutenIcon />, selected: true },
  { food: "Peanuts", icon: <PeanutIcon />, selected: false },
  { food: "Nuts", icon: <NutsIcon />, selected: false },
  { food: "Peach", icon: <PeachIcon />, selected: false },
  { food: "Caffine", icon: <CaffineIcon />, selected: false },
];
