import { useSelector } from "react-redux";
import { selectAllFarmstands } from "./farmstandsSlice";
import { Col, Row } from "reactstrap";
import FarmstandCard from "./FarmstandCard";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const FarmstandsList = () => {
  const farmstands = useSelector(selectAllFarmstands);
  console.log("farmstands:", farmstands);
  // const isLoading = useSelector((state) => state.farmstands.isLoading);
  // const errMsg = useSelector((state) => state.farmstands.errMsg);
  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (errMsg) {
  //   return <Error errMsg={errMsg} />;
  // }

  return (
    <Row className="ms-auto">
      {farmstands.map((farmstand) => {
        return (
          <Col md="5" className="m-4" key={farmstand.id}>
            <FarmstandCard farmstand={farmstand} />
          </Col>
        );
      })}
    </Row>
  );
};

export default FarmstandsList;
