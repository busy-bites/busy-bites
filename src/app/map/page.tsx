"use client";

import { icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useRef } from "react";
import { MapOverlayCarousel } from "./map-overlay-carousel";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

const PIN = icon({
  iconUrl: "/pin.png",
  iconSize: [60, 60],
  iconAnchor: [18, 51],
});

export default function MapPage() {
  const mapRef = useRef(null);
  const latitude = 49.2527;
  const longitude = -123.0034;

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
        <Marker position={[latitude, longitude]} icon={ICON}></Marker>
        <Marker position={[49.252, -123.0019]} icon={ICON}></Marker>
        <Marker position={[latitude, longitude]} icon={PIN}></Marker>
      </MapContainer>
      <MapOverlayCarousel />
    </div>
  );
}
