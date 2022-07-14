import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import '../../assets/css/Footer.css';
import '../../assets/css/Colors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer>
        <div className="full-footer">
          <Container>
            <Row>
              <Col xs={6} sm={8} md={7} lg={11}>
                <a
                  className="lnk-footer"
                  href="https://linkedin.com/in/césar-a-aguilar-rodríguez-443959168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i>
                      <FontAwesomeIcon icon={faLinkedinIn} className="some" size="2x" />
                    </i>
                  </span>
                </a>
                <a
                  className="lnk-footer"
                  href="https://github.com/CesarAguilar43"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i>
                      <FontAwesomeIcon icon={faGithub} className="some" size="2x" />
                    </i>
                  </span>
                </a>
              </Col>
              <Col xs={6} sm={4} md={5} lg={1}>
                <span>
                  <i onClick={scrollToTop}>
                    <FontAwesomeIcon
                      icon={faChevronCircleUp}
                      size="2x"
                      className="angle-up-footer some"
                    />
                  </i>
                </span>
              </Col>
            </Row>
            <hr className="divider" />
            <Row>
              <Col xs={12} sm={8} md={7} lg={2}>
                <span>
                  <p className="subtitle-footer">RECURSOS</p>
                  <ul className="lnks-footer">
                    <li>
                      <Link to="#" className="lnk-footer">
                        React
                      </Link>
                    </li>
                    <li>FontAwesome</li>
                    <li>flaticon</li>
                  </ul>
                </span>
              </Col>
              <Col xs={12} sm={8} md={7} lg={1}>
                <span>
                  <p className="subtitle-footer">CONTENIDO</p>
                  <ul className="lnks-footer">
                    <li>Inicio</li>
                    <li>Acerca</li>
                    <li>Desarrollo</li>
                  </ul>
                </span>
              </Col>
              {/* <Col xs={12} sm={8} md={7} lg={2}>
                <span>
                  <ul className="lnks-footer x2">
                    <li>Habilidades</li>
                    <li>Contacto</li>
                  </ul>
                </span>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="footer-register">
          <Container>
            <Row className="justify-content-md-center">
              <small>
                Desarrollado por César A. Aguilar Rodríguez &#169;2021 Todos los derechos reservados
              </small>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
