import Layout from '../../layouts/Layout';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { experienceCards } from '../../utils/InfoCards';
import '../../assets/css/Development.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faBuilding, faLink, faKey } from '@fortawesome/free-solid-svg-icons';

export function Development() {
  const { developId } = useParams();
  return (
    <Layout>
      <Container className="development-container">
        <div className="development-div-1">
          <Row>
            {[
              ...experienceCards.filter(({ developId: id }) => {
                return developId === id;
              }),
            ].map(
              (
                {
                  ruteImg,
                  alt,
                  company,
                  descImg,
                  style,
                  developId,
                  city,
                  site,
                  keyWords: { frontEnd, backEnd, moreTools },
                  primaryTools,
                },
                index
              ) => {
                return (
                  <>
                    <Col xs={12} lg={3}>
                      <Image src={ruteImg} alt={alt} className={style} id={`img-${developId}`} />
                      <hr />
                      <Row>
                        <Col xs={12} lg={2}>
                          <FontAwesomeIcon icon={faLocationArrow} />
                        </Col>
                        <Col xs={12} lg={10}>
                          <small>
                            <div className="title">Ubicación</div>
                            {city}
                          </small>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={2}>
                          <FontAwesomeIcon icon={faBuilding} />
                        </Col>
                        <Col xs={12} lg={10}>
                          <small>
                            <div className="title">Empresa</div>
                            {company}
                          </small>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={2}>
                          <FontAwesomeIcon icon={faLink} />
                        </Col>
                        <Col xs={12} lg={10}>
                          <small>
                            <div className="title">Links</div>
                            {site}
                          </small>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={2}>
                          <FontAwesomeIcon icon={faKey} />
                        </Col>
                        <Col xs={12} lg={10}>
                          <small>
                            <div className="title">Cliente</div> {frontEnd}
                          </small>
                          <br />
                          <small>
                            {' '}
                            <div className="title">Servidor</div> {backEnd}
                          </small>
                          <br />
                          <small>
                            {' '}
                            <div className="title">Otras herramientas</div> {moreTools}
                          </small>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} lg={9}>
                      <h1>{company}</h1>
                      <hr /> <br />
                      <Row>
                        {primaryTools.map((primary) => (
                          <Button
                            variant="outline-primary"
                            size="large"
                            id={developId}
                            className="primary-buttons"
                          >
                            {primary}
                          </Button>
                        ))}
                      </Row>
                      <br />
                      <p>{descImg}</p>
                    </Col>
                  </>
                );
              }
            )}
          </Row>
        </div>
      </Container>
    </Layout>
  );
}
