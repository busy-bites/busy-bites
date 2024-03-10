import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MapOverlay from "@/components/design/map-overlay";
import SandwichIcon from "@/components/icons/SandwichIcon";

const mapOverlayItems = [
  {
    amount: "5",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Ramen",
    host: "Jenny",
    distance: "1",
    time: "3pm",
  },
  {
    amount: "3",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Sandwich",
    host: "Sia",
    distance: "1.5",
    time: "4pm",
  },
  {
    amount: "2",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Milk",
    host: "Joyce",
    distance: "1.3",
    time: "5pm",
  },
];

export function MapOverlayCarousel() {
  return (
    <Carousel className="absolute bottom-8 w-full">
      <CarouselContent className="ml-5">
        {mapOverlayItems.map((item, index) => (
          <CarouselItem key={index} className="basis-[270px] pl-1">
            <MapOverlay {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
