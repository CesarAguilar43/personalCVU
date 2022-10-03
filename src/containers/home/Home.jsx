import '../../assets/css/Home.css';
import '../../assets/css/Colors.css';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import HomeImage from '../../assets/img/homeImage.jpeg';
import HoverCards from '../../components/hover-cards/Hover-Cards';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faReact,
  faGit,
  faJs,
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faNode,
  faGoogle,
  faGithub,
  faNpm,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFolder, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { experienceCards, profile } from '../../utils/InfoCards';

export function Home() {
  return (
    <Layout>
      <Container className="home-container">
        <Row>
          <Col xs={12} lg={6}>
            <div className="home-div-1">
              <h1>Perfil</h1>
              <hr />
              <p>{profile}</p>
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
              <section className="about-tooltip">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>}>
                  <span
                    className="d-inline-block"
                    style={{ fontSize: '2em', padding: '0 8px', margin: '0' }}
                  >
                    <a
                      className="lnk-about"
                      href="https://github.com/CesarAguilar43"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <FontAwesomeIcon icon={faGithub} className="some" />
                      </i>
                    </a>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Linkedin</Tooltip>}>
                  <span
                    className="d-inline-block"
                    style={{ fontSize: '2em', padding: '0 8px', margin: '0' }}
                  >
                    <a
                      className="lnk-about"
                      href="https://linkedin.com/in/césar-a-aguilar-rodríguez-443959168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <FontAwesomeIcon icon={faLinkedinIn} className="some" />
                      </i>
                    </a>
                  </span>
                </OverlayTrigger>
                {/* <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CV down</Tooltip>}>
                  <span
                    className="d-inline-block"
                    style={{ fontSize: '2em', padding: '0 8px', margin: '0' }}
                  >
                    <Link className="lnk-about">
                      <i>
                        <FontAwesomeIcon icon={faFilePdf} className="some" />
                      </i>
                    </Link>
                  </span>
                </OverlayTrigger> */}
              </section>
            </figure>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} lg={12}>
            <h1>Trabajos como Desarrollador</h1>
          </Col>
          {experienceCards.map(({ ruteImg, alt, company: titleImg, descImg, style, developId }) => {
            return (
              <>
                <Col xs={12} lg={4}>
                  <HoverCards
                    ruteImg={ruteImg}
                    alt={alt}
                    titleImg={titleImg}
                    descImg={descImg}
                    style={style}
                    developId={developId}
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <hr />
        <Row>
          <Col xs={12} lg={12}>
            <h1>Tecnologías</h1>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Java</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faJava} className="java" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faReact} className="react" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Git</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faGit} className="git" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faJs} className="javascript" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CSS3</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faCss3Alt} className="css" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Html 5</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faHtml5} className="html" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React-Bootstrap</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faBootstrap} className="bootstrap" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">nodejs</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faNode} className="nodejs" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Google Clod Platform</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faGoogle} className="some" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="tags-skills">
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">PostgreSQL</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faDatabase} className="some" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GitHub</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faGithub} className="github" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">npm</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faNpm} className="npm" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">TypeORM</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faFolder} className="npm" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GraphQL</Tooltip>}>
              <span className="d-inline-block" style={{ fontSize: '10vh', margin: '0 50px' }}>
                <i>
                  <FontAwesomeIcon icon={faProjectDiagram} className="graphql" />
                </i>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <br />
      </Container>
    </Layout>
  );
}
