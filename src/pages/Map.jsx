import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Menu from "../components/Menu";
import treeMap from "../image/tree-map.png";
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
  treeMap,
  iconUrl:
  treeMap,
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function MapComponent() {
  const [mapType, setMapType] = useState("normal");
  const [coordinates, setCoordinates] = useState([
    {
      lat: 40.3965429,
      lng: 49.8924428,
    },
    {
      lat: 40.387940,
      lng: 49.895546,
    },
    {
      lat: 40.397450,
      lng: 49.934809,
    },
    {
      lat: 40.3965429,
      lng: 49.8924428,
    },
    {
      lat: 40.395691,
      lng: 49.850798,
    },
    {
      lat: 40.369815,
      lng: 49.846978,
    },
    {
      lat: 40.380468,
      lng: 49.876731,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.4067321,
      lng: 49.8486877,
    },
    {
      lat: 40.3999941,
      lng: 49.75708,
    },
    {
      lat: 41.0449218,
      lng: 49.8495089,
    },
    {
      lat: 40.403894,
      lng: 49.849889,
    },
    {
      lat: 40.403886,
      lng: 49.850061,
    },
    {
      lat: 40.403893,
      lng: 49.849611,
    },
  
    {
      lat: 40.403864,
      lng: 49.849773,
    },
  
    {
      lat: 40.403860,
      lng: 49.849933,
    },
    {
      lat: 40.403736,
      lng: 49.849768,
    },
  
   {
      lat: 40.403745,
      lng: 49.849944,
    },
    {
      lat: 40.403724,
      lng: 49.850097,
    },
    

    
    
  ]);
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
    <>
    <MapContainer
      key={`${coordinates.lat}-${coordinates.lng}`}
      attributionControl={false}
      style={{ width: "100%", height: "100vh" }}
      center={coordinates[0]}
      zoom={16}
      zoomControl={true}
      whencreated={setMap}
    >
      <TileLayer url={mapTypeUrls[mapType]} />
      {coordinates.map((coord, index) => (
        <Marker key={index} position={coord} >
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
                {coord.lat} / {coord.lng}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
    <Menu/>
    </>
  );
}

export default MapComponent;
