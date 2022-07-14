import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/Hover-Cards.css';

const HoverCards = ({ ruteImg, altImg, titleImg, descImg, style, developId }) => {
  return (
    <Card style={{ width: '18rem' }} className={`container-hover-img figure`}>
      <Card.Img variant="top" src={ruteImg} className={style} />
      <Card.Body>
        <Card.Title>{titleImg}</Card.Title>
        <Card.Text>{descImg}</Card.Text>
        <Link to={`/development/${developId}`} className="navbar-title">
          <Button variant="outline-primary" className="btn-home-1" size="lg">
            Ver mas
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HoverCards;
