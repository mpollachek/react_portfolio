import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectFeaturedFarmstands } from '../farmstands/farmstandsSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';

const DisplayList = () => {
  const items = useSelector((state) => 
    selectFeaturedFarmstands(state)
  );
  console.log('display items:', items);
  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className='m-1' key={idx}>
            <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;