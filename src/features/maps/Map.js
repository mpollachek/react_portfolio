import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, LayersControl, useMap} from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { Button } from '@mui/material'
import { selectAllFarmstands } from '../farmstands/farmstandsSlice';

import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import "leaflet/dist/leaflet.css";

//  const farmstands = useSelector(selectAllFarmstands);

const { BaseLayer } = LayersControl;

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
    style={{ height: "80vh" }}
    whenCreated={setMyLocation}
  >
    <LayersControl>
      <BaseLayer checked name="OpenStreetMap">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
        />
      </BaseLayer>
    </LayersControl>
    <Control prepend position='bottomright'>
    
  <Button onClick={() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setMyLocation([lat, long])               
        console.log("2: " + myLocation);
      })
    }
  }} color='inherit'> 

     <ChangeMapView coords={myLocation} />

    <LocationSearchingIcon style={{backgroundColor: "white", fontSize: "40" }} />
  </Button>
</Control>
  </MapContainer>
);
}


export default Map;