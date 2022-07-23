import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

const FarmstandCard = ({farmstand}) => {
  const { id, image, name } = farmstand;
  return( 
  <Link to={`${id}`}>
  <Card>
    <CardImg
      width='100%'
      src={image}
      alt={name} 
    />
    <CardImgOverlay>
      <CardTitle>{name}</CardTitle>
    </CardImgOverlay>
  </Card>
  </Link> 
  );
}

export default FarmstandCard