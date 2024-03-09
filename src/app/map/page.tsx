"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useRef } from "react";

export default function MapPage() {
  const mapRef = useRef(null);
  const latitude = 49.2527;
  const longitude = -123.0034;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      ref={mapRef}
      style={{ height: "calc(100dvh - 56px)", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}
