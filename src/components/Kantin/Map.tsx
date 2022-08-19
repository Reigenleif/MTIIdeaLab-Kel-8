import {
  ImageOverlay,
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
import img from "../../assets/images";

type Bound = [[number,number],[number,number]]

const KantinMarker = ({ id, mapLink, position }: Kantin) => {

  const map = useMapEvents({
    click() {
      window.open(mapLink, '_blank') ;
    },
  });

  const delta = 0.00025
  const ratio = 41/25
  const bound:Bound = [[position[0] - delta*ratio, position[1] + delta],[position[0] + delta*ratio,position[1] - delta]]

  
  return <ImageOverlay url={img.leafletMarker} bounds={bound}></ImageOverlay>;
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
