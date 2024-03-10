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
}: {
  mapOverlayItems: MenuItem[];
  setCurrentPinLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
}) {
  return (
    <Carousel className="absolute bottom-8 w-full">
      <CarouselContent className="ml-5">
        {mapOverlayItems.map((item) => (
          <CarouselItem
            key={item.food + item.host}
            className="h-full basis-[278px] pl-1 "
            onClick={() => setCurrentPinLocation(item.coordinates)}
          >
            <MapOverlay {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
