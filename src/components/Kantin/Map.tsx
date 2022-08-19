import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DUMMY_KANTIN } from "../../storage/kantin";
import { Kantin } from "../../storage/kantin";
import { StepPops } from "../../util/entrance-animation";

const KantinMarker = ({ id, mapLink, position }: Kantin) => {

  const map = useMapEvents({
    click() {
      window.open(mapLink, '_blank') ;
    },
  });

  return <Marker position={position} key={id}></Marker>;
};

export default function Map() {
  return (
    <MapContainer
      center={[-6.890871, 107.610327]}
      zoom={15.5}
      style={{
        height: "100%",
        width: "min(90%,30em)",
        borderRadius: "4px",
        zIndex: 0,
      }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <StepPops>
        {DUMMY_KANTIN.map((e) => (
          <KantinMarker {...e} key={e.id} />
        ))}
      </StepPops>
    </MapContainer>
  );
}
