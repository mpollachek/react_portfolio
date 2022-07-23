import { useMemo, useState } from 'react';
import { Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Map from '../features/maps/Map';





const MapsPage = () => {
  return(
    <Container>
      <SubHeader current='Maps' />
      <Row>
        <Map />
      </Row>
    </Container>
  );
};



export default MapsPage;