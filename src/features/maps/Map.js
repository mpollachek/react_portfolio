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

const { BaseLayer } = LayersControl;

function Map() {
  const [myLocation, setMyLocation] = useState([51.505, -0.09]);

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  const ChangeMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setMyLocation([lat, long]);
        console.log("2: " + myLocation);
      });
    }
  }

  console.log("1: " + myLocation);

  useEffect(() => {
    ChangeMyLocation()
  }, [])

  return (
    <MapContainer
      center={myLocation}
      zoom={13}
      style={{ height: "70vh" }}
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
            ChangeMyLocation()
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
