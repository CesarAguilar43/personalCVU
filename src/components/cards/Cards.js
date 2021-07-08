import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Cards.css';
import ModalCard from '../modal/Modal';

function Cards({ head, title, subtitle, text, age, seemore }) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Card>
                <Card.Header className="header-cards">{head}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button
                        variant="outline-primary"
                        className="btn-cards"
                        size="lg"
                        onClick={() => setModalShow(true)}
                    >
                        Ver mas
                    </Button>
                </Card.Body>
            </Card>
            <ModalCard
                show={modalShow}
                head={head}
                title={title}
                subtitle={subtitle}
                text={text}
                age={age}
                seemore={seemore}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Cards;