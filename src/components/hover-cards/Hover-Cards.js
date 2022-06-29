import { Card } from 'react-bootstrap';
import '../../assets/css/Hover-Cards.css';

const HoverCards = ({ ruteImg, altImg, titleImg, descImg, style }) => {
  return (
    <Card style={{ width: '18rem' }} className={`container-hover-img figure`}>
      <Card.Img variant="top" src={ruteImg} className={style} />
      <Card.Body>
        <Card.Title>{titleImg}</Card.Title>
        <Card.Text>{descImg}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HoverCards;
