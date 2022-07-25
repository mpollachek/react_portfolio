import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectAllFarmstands } from "../farmstands/farmstandsSlice";
import FarmstandCard from "../farmstands/FarmstandCard";
import { Marker, Popup } from "react-leaflet";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

const iconMarkup = renderToStaticMarkup(
  <AgricultureIcon
    style={{
      color: "green",
      background: "rgba(220, 220, 220, .6)",
      fontSize: 40,
    }}
    variant="contained"
  >
    Booyah
  </AgricultureIcon>
);
const farmIcon = divIcon({
  html: iconMarkup,
});

const MapList = () => {
  const farmstands = useSelector(selectAllFarmstands);

  return (
    <Row className="ms-auto">
      {farmstands.map((farmstand) => {
        return (
          <Marker key={farmstand.id}
            position={[farmstand.latitude, farmstand.longitude]}
            icon={farmIcon}
          >
            <Popup minWidth="500">
              <Col className="m-4" >
              <FarmstandCard farmstand={farmstand} />
              <Row style={{ fontSize: 30 }}>{farmstand.description}</Row>
              </Col>
            </Popup>
          </Marker>
        );
      })}
    </Row>
  );
};

export default MapList;
