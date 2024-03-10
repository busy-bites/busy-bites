"use client";

import { icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useRef, useState } from "react";
import { MapOverlayCarousel } from "./map-overlay-carousel";
import SandwichIcon from "@/components/icons/SandwichIcon";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

const PIN = icon({
  iconUrl: "/pin.png",
  iconSize: [60, 60],
  iconAnchor: [18, 51],
});

const menuItems = [
  {
    amount: "5",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Ramen",
    host: "Jenny",
    distance: "1",
    time: "3pm",
    coordinates: { lat: 49.2527, lng: -123.0034 },
  },
  {
    amount: "3",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Sandwich",
    host: "Sia",
    distance: "1.5",
    time: "4pm",
    coordinates: { lat: 49.252, lng: -123.0019 },
  },
  {
    amount: "2",
    image: <SandwichIcon width={57.5} height={57.5} />,
    food: "Milk",
    host: "Joyce",
    distance: "1.3",
    time: "5pm",
    coordinates: { lat: 49.253, lng: -123.0015 },
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

  return (
    <div className="relative">
      <MapContainer
        center={[latitude, longitude]}
        zoom={17}
        ref={mapRef}
        style={{
          height: "calc(100dvh - 56px)",
          width: "100%",
          zIndex: -5,
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
