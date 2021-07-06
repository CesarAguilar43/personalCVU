import '../../assets/css/Home.css';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import HomeImage from '../../assets/img/homeImage.jpeg';
import Cards from '../../components/cards/Cards';

const Home = () => {
    return (
        <Layout>
            <Container className="home-container">
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="home-div-1">
                            <h1>Este soy yo ...</h1>
                            <hr />
                            <p>Mi nombre es César Alejandro Aguilar Rodríguez,
                                soy Ingeniero en Sistemas Computacionales con un master en
                                Ciencias de la Computación.
                                Soy una persona con pasión por la enseñanza,
                                empatía, con actitud positiva y ganas de aprender tecnologías
                                nuevas.</p>
                            <Button variant="outline-primary" className="btn-home-1" size="lg">Ver mas</Button>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <figure className="fg-home-image-1">
                            <Image src={HomeImage} alt="Home image" roundedCircle className="home-image-1" />
                        </figure>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Mis estudios academicos ...</h1>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="home-div-2">
                            <Cards
                                head="INGENIERÍA EN SISTEMAS COMPUTACIONALES"
                                title="LICENCIATURA"
                                text="Titulo de licenciatura en Ingeniería en Sistemas Computacionales con la especialidad en dispositivos moviles."
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="home-div-2">
                            <Cards
                                head="MASTER EN CIENCIAS DE LA COMPUTACIÓN"
                                title="POSGRADO"
                                text="Titulo de posgrado en Ciencias de la computación con la especialidad de optimización de algoritmos metaheurísticos."
                            />
                        </div>
                    </Col>
                </Row>
                <br /><hr />
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Mis habilidades ...</h1>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Css 3</Tooltip>}>
                            <span className="d-inline-block">
                                <Button disabled style={{ pointerEvents: 'none' }}>
                                    
                                </Button>
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;