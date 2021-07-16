import { useRef } from 'react';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import '../../assets/css/Skills.css';
import '../../assets/css/Colors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
    faJava, faAndroid, faCodepen, faCss3Alt, faHtml5,
    faReact, faSass, faBootstrap, faNpm, faJs, faYarn, faPhp,
    faNode, faGit, faGithub
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {

    const gestor = useRef(null);

    const goToGestor = () => {
        window.scrollTo({
            top: gestor.current.offsetTop,
            behavior: "smooth"
        })
    };

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
                            <Button variant="outline-primary" className="btn-home-1" size="lg">
                                Escritorio
                            </Button>
                    </Col>
                    <Col xs={2} lg={2}>
                            <Button variant="outline-primary" className="btn-home-1" size="lg">
                                Nivel bajo/medio
                            </Button>
                    </Col>
                    <Col xs={2} lg={2}>
                            <Button variant="outline-primary" className="btn-home-1" size="lg">
                                Front End
                            </Button>
                    </Col>
                    <Col xs={2} lg={2}>
                            <Button variant="outline-primary" className="btn-home-1" size="lg">
                                Back End
                            </Button>
                    </Col>
                    <Col xs={2} lg={2}>
                            <Button variant="outline-primary" className="btn-home-1" size="lg" onClick={goToGestor}>
                                Gestor
                            </Button>
                    </Col>
                </Row>
                <br />
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
                                <i><FontAwesomeIcon icon={faJava} className="java" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Android studio</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faAndroid} className="android" /></i>
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
                                <i><FontAwesomeIcon icon={faCodepen} className="some" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={6} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Microchip</Tooltip>}>
                            <span className="d-inline-block ">
                                <i><FontAwesomeIcon icon={faMicrochip} className="some" /></i>
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
                                <i><FontAwesomeIcon icon={faCss3Alt} className="css" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Html 5</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faHtml5} className="html" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faReact} className="react" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sass</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faSass} className="sass" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bootstrap</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faBootstrap} className="bootstrap" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={2}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">npm</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faNpm} className="npm" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}>
                            <span className="d-inline-block f1">
                                <i><FontAwesomeIcon icon={faJs} className="javascript" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={6}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Yarn</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faYarn} className="yarn" /></i>
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
                                <i><FontAwesomeIcon icon={faPhp} className="php" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">nodejs</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faNode} className="nodejs" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4} className="tags-skills">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">database</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faDatabase} className="some" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={12} ref={gestor}>
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
                                <i><FontAwesomeIcon icon={faGit} className="git" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={12} lg={4}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>}>
                            <span className="d-inline-block">
                                <i><FontAwesomeIcon icon={faGithub} className="github" /></i>
                            </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Skills;