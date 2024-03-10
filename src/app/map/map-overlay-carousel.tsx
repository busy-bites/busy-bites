import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MapOverlay from "@/components/design/map-overlay";
import { MenuItem } from "./page";

export function MapOverlayCarousel({
  mapOverlayItems,
  setCurrentPinLocation,
  selectedMenuItem,
  setSelectedMenuItem,
}: {
  mapOverlayItems: MenuItem[];
  setCurrentPinLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
  selectedMenuItem: number;
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Carousel className="absolute bottom-8 w-full">
      <CarouselContent className="mx-20">
        {mapOverlayItems.map((item, i) => (
          <CarouselItem
            key={item.food + item.host}
            className="h-full basis-[278px] pl-1 "
            onClick={() => {
              setCurrentPinLocation(item.coordinates);
              setSelectedMenuItem(i);
            }}
          >
            <MapOverlay selected={i === selectedMenuItem} {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
