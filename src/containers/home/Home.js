import { useEffect } from 'react';
import '../../assets/css/Home.css';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, Image, Button, OverlayTrigger, Tooltip, ProgressBar } from 'react-bootstrap';
import HomeImage from '../../assets/img/homeImage.jpeg';
import Cards from '../../components/cards/Cards';
import image01 from '../../assets/img/banner-pagina-inicio-chica.png';
import image02 from '../../assets/img/theDM.png';
import HoverCards from '../../components/hover-cards/Hover-Cards';
import { Link } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                            <Link to="/about" className="navbar-title">
                                <Button variant="outline-primary" className="btn-home-1" size="lg">
                                    Ver mas
                                </Button>
                            </Link>
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
                        <h1>Mis estudios académicos ...</h1>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="home-div-2">
                            <Cards
                                head="INGENIERÍA EN SISTEMAS COMPUTACIONALES"
                                title="LICENCIATURA"
                                subtitle="Grado obtenido en el Instituto Tecnólogico de Ciudad Madero."
                                text="Título de licenciatura en Ingeniería en Sistemas Computacionales con la especialidad en dispositivos móviles."
                                age="2013-2018"
                                seemore='Como trabajo final para la obtención del grado de ingeniero en sistemas computacionales, se hizo residencias en el centro de mantenimiento de Telmex Madero.'
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="home-div-2">
                            <Cards
                                head="MASTER EN CIENCIAS DE LA COMPUTACIÓN"
                                title="POSGRADO"
                                subtitle="Grado obtenido en el Instituto Tecnólogico de Ciudad Madero."
                                text="Título de posgrado en Ciencias de la computación con la especialidad de optimización de algoritmos metaheurísticos."
                                age="2019-2021"
                                seemore='Tesis presentada para la obtención de grado en master en ciencias de la computación con el nombre de "DESARROLLO DE ARQUITECTURA DE SOPORTE A LA TOMA DE DECISIONES PARA AGENTES EN HARDWARE"'
                            />
                        </div>
                    </Col>
                </Row>
                <br /><hr />
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Mis trabajos como desarrollador ...</h1>
                    </Col>
                    <Col xs={12} lg={6}>
                        <HoverCards
                            ruteImg={image01}
                            alt="Seridma"
                            titleImg="Seridma App con React.js"
                            descImg="Se desarrolló una app con React.js del lado del cliente, con la finalidad de promocionar el servicio de fumigación" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <HoverCards
                            ruteImg={image02}
                            alt="TheDieselMarket"
                            titleImg="TheDieselMarket rest api con React.js"
                            descImg="Se desarrolló una api rest para la venta y compra de diesel en la zona de Nuevo León" />
                    </Col>
                </Row>
                <br /><hr />
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Mis habilidades ...</h1>
                    </Col>
                    <Col xs={2} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Java</Tooltip>}>
                            <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }} >
                                <i className="fab fa-java" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={10} lg={10}>
                        <ProgressBar animated now={60} />
                    </Col>
                    <Col xs={2} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
                            <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }} >
                                <i className="fab fa-react" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={10} lg={10}>
                        <ProgressBar animated now={35} />
                    </Col>
                    <Col xs={2} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Git</Tooltip>}>
                            <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }} >
                                <i className="fab fa-git" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={10} lg={10}>
                        <ProgressBar animated now={15} />
                    </Col>
                    <Col xs={2} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}>
                            <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }} >
                                <i className="fab fa-js" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={10} lg={10}>
                        <ProgressBar animated now={15} />
                    </Col>
                    <Col xs={12} lg={12}>
                        <Link to="/skills" className="navbar-title">
                            <Button variant="outline-primary" className="btn-home-1" size="lg">
                                Ver mas
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <br />
            </Container>
        </Layout>
    )
}

export default Home;