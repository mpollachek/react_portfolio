import { Container, Row } from 'reactstrap';
import FarmstandsList from '../features/farmstands/FarmstandsList';
import SubHeader from '../components/SubHeader';

const FarmstandsPage = () => {
  return (
    <Container>
      <SubHeader current='Farmstands' />
      <Row>
        <FarmstandsList />
      </Row>
    </Container>
  )
};

export default FarmstandsPage;