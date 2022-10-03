import Layout from '../../layouts/Layout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HomeImage from '../../assets/img/homeImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import '../../assets/css/About.css';
import chess from '../../assets/img/chess.jpg';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { knowledgeCards } from '../../utils/InfoCards';
import Cards from '../../components/cards/Cards';

export function About() {
  return (
    <Layout>
      <Container className="about-container">
        <Row>
          <Col xs={12} lg={12}>
            <div className="about-div-1">
              <h1>Perfil</h1>
              <hr />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <figure className="fg-about-image-1">
              <Image src={HomeImage} alt="Me image" roundedCircle className="about-image-1" />
            </figure>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <h2>
              <strong>Estudios Académicos</strong>
            </h2>
            <hr />
          </Col>
          {knowledgeCards.map((card) => {
            return (
              <>
                <Col xs={12} lg={6}>
                  <Cards
                    head={card.head}
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    age={card.age}
                    seemore={card.seemore}
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row>
          <Col xs={12} lg={12}>
            <h2>
              <strong>Diplomas</strong>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={2}>
            <p className="about-p">
              <span>Abril 2019</span>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <p className="about-p">
              <span>
                Por haber impartido la conferencia <strong>"Aplicaciones del Lenguaje R"</strong>
                en la 8a jornada Tecnológica de Ingeniería en Sistemas "Innovación en movimiento".
              </span>
            </p>
          </Col>
          <Col xs={12} lg={4} style={{ paddingTop: '15px' }}>
            <span>
              <i>
                <FontAwesomeIcon icon={faMedal} size="3x" />
              </i>
            </span>
          </Col>
          <Col xs={12} lg={2}>
            <p className="about-p">
              <span>Junio 2021</span>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <p className="about-p">
              <span>
                <strong>
                  Analysis and design of an agent architecture that incorporates preferences in
                  Hardware.{' '}
                </strong>
                Ponencia virtual en "The international virtual workshop on business analytics Eureka
                2021".
              </span>
            </p>
          </Col>
          <Col xs={12} lg={4} style={{ paddingTop: '15px' }}>
            <span>
              <i>
                <FontAwesomeIcon icon={faMedal} size="3x" />
              </i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <h2>
              <strong>Pasatiempos</strong>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8}>
            <p className="about-p">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCheckSquare} size="1x" />{' '}
                </i>
                Me gustan los deportes como el Futbol, Tenis, Box, Billar y tambien soy aficionado
                al ajedrez de manera virtual.
              </span>
            </p>
            <p className="about-p">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCheckSquare} size="1x" />{' '}
                </i>
                Me interesa la lectura en concreto la historia mundial, sucesos que pasaron en la
                segunda guerra mundial, el coliseo romano, historia de México.
              </span>
            </p>
            <p className="about-p">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCheckSquare} size="1x" />{' '}
                </i>
                Me gustan los videojuegos, el coleccionar consolas retro, discos con sus manuales
                originales.
              </span>
            </p>
            <p className="about-p">
              <span>
                <i>
                  <FontAwesomeIcon icon={faCheckSquare} size="1x" />{' '}
                </i>
                Me gusta pasar tiempo libre con mis seres queridos y mi mascota.
              </span>
            </p>
          </Col>
          <Col xs={12} lg={4}>
            <span>
              <Image src={chess} width="450" id="chess" />
            </span>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
