import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectFarmstandsById } from '../features/farmstands/farmstandsSlice';
import FarmstandDetail from '../features/farmstands/FarmstandDetail';
// import CommentsList
import SubHeader from '../components/SubHeader';
import FarmstandProducts from '../features/farmstands/FarmstandProducts';

const FarmstandDetailPage = () => {
  const { farmstandId } = useParams();
  const farmstand = useSelector(selectFarmstandsById(farmstandId));
  console.log('farmstand:', farmstand);
  return (
    <Container>
      <SubHeader current={farmstand.name} detail={true} />
      <Row>
        <FarmstandDetail farmstand={farmstand} />
        {/* <FarmstandProducts farmstand={farmstand}/> */}
        {/* CommentsList farmstandId={farmstandId} */}
      </Row>
    </Container>
  );
};

export default FarmstandDetailPage;