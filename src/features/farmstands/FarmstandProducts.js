import { Card, CardText, CardBody, Col, Row, CardTitle } from "reactstrap";
import { selectFarmstandProducts } from "./farmstandsSlice";
import { useSelector } from "react-redux/es/exports";

const FarmstandProducts = ({farmstand}) => {
  const { name } = farmstand;
  const farmstandProducts = useSelector((state) =>
  selectFarmstandProducts(state)
  );
  console.log("farmstand products:", farmstandProducts);
  return (
    <Row className="ms-auto">
      {farmstandProducts.map((product) => {
        return (
          product && (
          <Col md="5" className="m-1">
            <Card>
              <CardTitle>{name} Products</CardTitle>
              <CardBody>
                <CardText>
                  
                </CardText>
              </CardBody>
            </Card>
          </Col>
          )
        );
      })}
    </Row>
  );
};

export default FarmstandProducts;
