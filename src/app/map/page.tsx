"use client";

import { icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useRef, useState } from "react";
import { MapOverlayCarousel } from "./map-overlay-carousel";
import SandwichIcon from "@/components/icons/SandwichIcon";
import SoupIcon from "@/components/icons/SoupIcon";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

const PIN = icon({
  iconUrl: "/pin.png",
  iconSize: [60, 60],
  iconAnchor: [18, 51],
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
    link: "/menu-item/soup?host=Jenny&distance=1",
  },
  {
    amount: "3",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Sandwich",
    host: "Joyce",
    distance: "1.5",
    time: "4pm",
    coordinates: { lat: 49.252, lng: -123.0019 },
    link: "/menu-item/sandwich?host=Joyce&distance=1.5",
  },
  // {
  //   amount: "2",
  //   image: <SandwichIcon width={57.5} height={57.5} />,
  //   food: "Milk",
  //   host: "Joyce",
  //   distance: "1.3",
  //   time: "5pm",
  //   coordinates: { lat: 49.253, lng: -123.0015 },
  //   link: "#",
  // },
];

export default function MapPage() {
  const mapRef = useRef(null);
  const latitude = menuItems[0].coordinates.lat;
  const longitude = menuItems[0].coordinates.lng;
  const [currentPinLocation, setCurrentPinLocation] = useState({
    lat: latitude,
    lng: longitude,
  });

  return (
    <div className="relative">
      <MapContainer
        center={[latitude, longitude]}
        zoom={17}
        ref={mapRef}
        style={{
          height: "calc(100dvh - 56px)",
          width: "100%",
          zIndex: 0,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {menuItems.map((item, index) => (
          <Marker key={index} position={item.coordinates} icon={ICON}></Marker>
        ))}
        <Marker position={currentPinLocation} icon={PIN}></Marker>
      </MapContainer>
      <MapOverlayCarousel
        mapOverlayItems={menuItems}
        setCurrentPinLocation={setCurrentPinLocation}
      />
    </div>
  );
}
