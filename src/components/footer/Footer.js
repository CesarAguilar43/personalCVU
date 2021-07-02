import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import '../../assets/css/Footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-full">
                <Container>
                    <Row>
                        <Col>
                            <p>Hola mundo</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-register">
                <Container>
                    <Row className="justify-content-md-center">
                        <small>Desarrollado por César A. Aguilar Rodríguez &#169;2021 Todos los derechos reservados</small>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer;