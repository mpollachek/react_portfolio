import { useSelector } from 'react-redux';
import { selectAllFarmstands } from './farmstandsSlice';
import {Col, Row} from 'reactstrap';
import FarmstandCard from './FarmstandCard';

const FarmstandsList = () => {
const farmstands = useSelector(selectAllFarmstands);
console.log('farmstands:', farmstands);
  return (
      <Row className='ms-auto'>
          {farmstands.map((farmstand) => {
              return (
                  <Col md='5' className='m-4' key={farmstand.id}>
                      <FarmstandCard farmstand={farmstand} />
                  </Col>
              );
          })}
      </Row>
  );
};

export default FarmstandsList;