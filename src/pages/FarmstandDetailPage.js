import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectFarmstandsById } from '../features/farmstands/farmstandsSlice';
import FarmstandDetail from '../features/farmstands/FarmstandDetail';
import CommentsList from '../features/comments/CommentList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const FarmstandDetailPage = () => {
  const { farmstandId } = useParams();
  const farmstand = useSelector(selectFarmstandsById(farmstandId));
  console.log('farmstand:', farmstand);
  const isLoading = useSelector((state) => state.farmstands.isLoading);
  const errMsg = useSelector((state) => state.farmstands.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
        <>
            <FarmstandDetail farmstand={farmstand} />
            <CommentsList farmstandId={farmstandId} />
        </>
    );
}

  return (
    <Container>
      <SubHeader current={farmstand.name} detail={true} />
      <Row>
        <FarmstandDetail farmstand={farmstand} />
        <CommentsList farmstandId={farmstandId} />
      </Row>
    </Container>
  );
};

export default FarmstandDetailPage;