import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Cards.css';

const Cards = ({head, title, text }) => {
    return (
        <>
                <Card>
                    <Card.Header className="header-cards">{head}</Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        <Button variant="outline-primary" className="btn-cards"  size="lg">Ver mas</Button>
                    </Card.Body>
                </Card>
        </>
    );
}

export default Cards;