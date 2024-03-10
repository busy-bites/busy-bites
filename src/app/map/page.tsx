"use client";

import "leaflet/dist/leaflet.css";

import { useRef, useState } from "react";
import { MapOverlayCarousel } from "./map-overlay-carousel";
import SandwichIcon from "@/components/icons/SandwichIcon";
import SoupIcon from "@/components/icons/SoupIcon";
import RamenIcon from "@/components/icons/RamenIcon";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map"), {
  ssr: false,
});

export type MenuItem = {
  amount: string;
  image: React.ReactNode;
  food: string;
  host: string;
  distance: string;
  time: string;
  coordinates: { lat: number; lng: number };
  link: string;
};
const menuItems: MenuItem[] = [
  {
    amount: "5",
    image: <SoupIcon width={57.5} height={57.5} />,
    food: "Soup",
    host: "Jenny",
    distance: "1",
    time: "3pm",
    coordinates: { lat: 49.2527, lng: -123.0034 },
    link: "/menu-item/1?host=Jenny&distance=1",
  },
  {
    amount: "3",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Sandwich",
    host: "Joyce",
    distance: "1.5",
    time: "4pm",
    coordinates: { lat: 49.252, lng: -123.0019 },
    link: "/menu-item/2?host=Joyce&distance=1.5",
  },
  {
    amount: "2",
    image: <RamenIcon width={57.5} height={57.5} />,
    food: "Ramen",
    host: "Scott",
    distance: "1.3",
    time: "5pm",
    coordinates: { lat: 49.253, lng: -123.0015 },
    link: "/menu-item/3?host=Scott&distance=1.2",
  },
];

export default function MapPage() {
  const mapRef = useRef(null);
  const latitude = menuItems[0].coordinates.lat;
  const longitude = menuItems[0].coordinates.lng;
  const [currentPinLocation, setCurrentPinLocation] = useState({
    lat: latitude,
    lng: longitude,
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <div className="relative">
      <MapComponent
        latitude={latitude}
        longitude={longitude}
        mapRef={mapRef}
        menuItems={menuItems}
        currentPinLocation={currentPinLocation}
      />
      <MapOverlayCarousel
        mapOverlayItems={menuItems}
        setCurrentPinLocation={setCurrentPinLocation}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
      />
    </div>
  );
}
