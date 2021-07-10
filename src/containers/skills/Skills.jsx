import { useEffect } from 'react';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import '../../assets/css/Skills.css';
import { Link } from 'react-router-dom';

const Skills = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <Layout>
            <Container className="home-container">
                <Row>
                    <Col xs={12} lg={12}>
                        <div className="skills-div-1">
                            <h1>Mis habilidades</h1>
                            <hr />
                        </div>
                    </Col>
                </Row>
                <Row>
                        <Col xs={2} lg={2}>
                            <Link to="#p1">
                                <Button variant="outline-primary" className="btn-home-1" size="lg">
                                    Escritorio
                                </Button>
                            </Link>
                        </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                        <label>
                            <p>Mis habilidades adquiridas a traves del tiempo han sido variadas, empezando por tecnologias
                                con enfoque a aplicaciones de escritorio como lo es Java, C++ y C#, como tambien aplicaciones
                                para android con Java nativamente.
                            </p>
                        </label>
                    </Col>
                    <Col xs={2} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Java</Tooltip>}>
                            <span className="d-inline-block f1" >
                                <i className="fab fa-java" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Android studio</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-android" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                        <label>
                            <p>
                                Para las tecnologias de bajo o intermedio nivel se encuentra C y Arduino, teniendo experiencia
                                en pequeños proyectos de manejo de sensores y actuadores con tarjetas microcontroladoras.
                            </p>
                        </label>
                    </Col>
                    <Col xs={6} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Code</Tooltip>}>
                            <span className="d-inline-block f1">
                                <i className="fas fa-code" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={6} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Microchip</Tooltip>}>
                            <span className="d-inline-block f2">
                                <i className="fas fa-microchip" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                        <label>
                            <p>
                                Para tecnologias web he trabajado con aplicaciones nativamente utilizando html 5,
                                Css 3 y JavaScript por la parte del cliente, como tambien he usado librerias como Rect
                                con el cual he utlizado tecnologias npm y yarn para el manejo de paquetes, react-bootstrap
                                para el maquetamiento, como Sass para modificar componentes dentro de react-bootstrap.
                            </p>
                        </label>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Css 3</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-css3-alt" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Html 5</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-html5" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-react" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sass</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-sass" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bootstrap</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-bootstrap" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">npm</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-npm" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}>
                            <span className="d-inline-block f1">
                                <i className="fab fa-js" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Yarn</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-yarn" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                        <label>
                            <p>
                                Por el lado del servidor he trabajado con php nativamente en proyectos individuales,
                                como con nodejs con la libreria express. Para el manejo de base de datos he trabajado con
                                mysql, sql, postgres como con tecnologias como graphlql o metologias como ORM con
                                Sequelize.
                            </p>
                        </label>
                    </Col>
                    <Col xs={12} lg={4}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">php</Tooltip>}>
                            <span className="d-inline-block f1" id="p1">
                                <i className="fab fa-php" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">nodejs</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fab fa-node" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4} className="tags-skills">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">database</Tooltip>}>
                            <span className="d-inline-block">
                                <i className="fas fa-database" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12}>
                        <label>
                            <p>
                                Para el manejo de versiones he trabajado con un gestor de versiones como lo 
                                es Git, asi como un gestor de repositorios en la nube como lo es GitHub.
                            </p>
                        </label>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Git</Tooltip>}>
                            <span className="d-inline-block f1">
                                <i className="fab fa-git" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>}>
                            <span className="d-inline-block">
                            <i className="fab fa-github" />
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Skills;