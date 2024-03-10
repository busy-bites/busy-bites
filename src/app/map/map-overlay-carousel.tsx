import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MapOverlay from "@/components/design/map-overlay";

export function MapOverlayCarousel({
  mapOverlayItems,
  setCurrentPinLocation,
}: {
  mapOverlayItems: {
    amount: string;
    image: React.ReactNode;
    food: string;
    host: string;
    distance: string;
    time: string;
    coordinates: { lat: number; lng: number };
  }[];
  setCurrentPinLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
}) {
  return (
    <Carousel className="absolute bottom-8 w-full">
      <CarouselContent className="ml-5">
        {mapOverlayItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[270px] pl-1"
            onClick={() => setCurrentPinLocation(item.coordinates)}
          >
            <MapOverlay {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
