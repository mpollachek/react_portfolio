import { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import L, { divIcon } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
  useMap,
} from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { Button } from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import "leaflet/dist/leaflet.css";
import { rgba } from "@react-spring/shared";
import MapList from "./MapList";
import CreateListingForm from "../../components/CreateListingForm";
import FormModal from "../../components/FormModal";

const iconMarkup = renderToStaticMarkup(
  <AgricultureIcon style={{color: "green", background: "rgba(220, 220, 220, .6)", fontSize: 40 }} variant="contained" >Booyah</AgricultureIcon>
);
  const farmIcon = divIcon({
    html: iconMarkup
  });

const { BaseLayer } = LayersControl;

// const getCoordinates = () => {
//   useMapEvents({
//     click(e) {
//       // setState your coords here
//       // coords exist in "e.latlng.lat" and "e.latlng.lng"
//       console.log(e.latlng.lat);
//       console.log(e.latlng.lng);
//     },
//   });
//   return false;
// }


function Map() {
  const [myLocation, setMyLocation] = useState([51.505, -0.09]);

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  console.log("1: " + myLocation);

  return (
    <MapContainer
      center={myLocation}
      zoom={13}
      style={{ height: "70vh" }}
      whenCreated={setMyLocation}
    >
      <LayersControl>
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
          />
          <MapList />

        </BaseLayer>
      </LayersControl>
      <Control prepend position="bottomright">
        <Button
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                setMyLocation([lat, long]);
                console.log("2: " + myLocation);
              });
            }
          }}
          color="inherit"
        >
          <ChangeMapView coords={myLocation} />

          <LocationSearchingIcon
            style={{ backgroundColor: "white", fontSize: "40" }}
          />
        </Button>
      </Control>
      <Control prepend position="bottomleft">
        <FormModal form={<CreateListingForm />} modalButton='Share A Farmstand'  />
      </Control>
    </MapContainer>
  );
}

export default Map;
