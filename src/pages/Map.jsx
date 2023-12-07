import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function MapComponent() {
  const [mapType, setMapType] = useState("normal");
  const [coordinate, setCoordinates] = useState({
    lat: 40.38723973309483,
    lng: 49.84051982446977,
  });
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) {
      map.invalidatesize();
    }
  }, [map]);

  const mapTypeUrls = {
    hybrid:
      "https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=BxjgTP79VajMpRLFl1z7",
    normal: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  return (
    <MapContainer
      key={`${coordinate.lat}-${coordinate.lng}`}
      attributionControl={false}
      style={{ width: "100%", height: "80vh" }}
      center={coordinate}
      zoom={16}
      zoomControl={true}
      whencreated={setMap}
    >
      <TileLayer url={mapTypeUrls[mapType]} />
      <Marker position={coordinate}>
        <Popup>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <h3 className="text-center m-0">Ağac burada yerləşir:</h3>
            <p>
              {coordinate.lat} / {coordinate?.lng}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
