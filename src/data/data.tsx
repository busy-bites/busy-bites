import SandwichIcon from "@/components/icons/SandwichIcon";
import SoupIcon from "@/components/icons/SoupIcon";

export const menu = [
  {
    id: "soup",
    icon: <SoupIcon width={311} height={215} />,
    reserveIcon: <SoupIcon width={173.14} height={119.7} />,
    description: `Discover the warmth of my homemade tomato soup, a comforting blend
              of ripe tomatoes, fragrant herbs, and a hint of sweetness!`,
    food: "Fresh Tomato Soup",
    contains: ["Milk", "Gluten"],
    mayContain: ["Nuts"],
  },
  {
    id: "sandwich",
    icon: <SandwichIcon width={222.57} height={222.57} />,
    reserveIcon: <SandwichIcon width={140} height={140} />,
    description: `Delight in my Belt Sandwich—a symphony of crispy bacon, fresh eggs, and vibrant veggies hugged by golden toast. Experience a burst of flavors curated for the ultimate satisfaction in every bite.`,
    food: "BLT Sandwich",
    contains: ["Milk", "Gluten"],
    mayContain: ["Nuts", "Soy"],
  },
];
