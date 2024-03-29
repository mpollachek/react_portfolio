import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectFeaturedFarmstands } from '../farmstands/farmstandsSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const DisplayList = () => {
  const items = useSelector((state) => 
    selectFeaturedFarmstands(state)
  );
  console.log('display items:', items);
  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }

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