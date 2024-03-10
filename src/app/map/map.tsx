import { MenuItem } from "./page";

import { icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

const PIN = icon({
  iconUrl: "/pin.png",
  iconSize: [60, 60],
  iconAnchor: [18, 51],
});

export default function Map({
  latitude,
  longitude,
  mapRef,
  menuItems,
  currentPinLocation,
}: {
  latitude: number;
  longitude: number;
  mapRef: any;
  menuItems: MenuItem[];
  currentPinLocation: { lat: number; lng: number };
}) {
  return (
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
  );
}
