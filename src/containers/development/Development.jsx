import Layout from '../../layouts/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { experienceCards } from '../../utils/InfoCards';
import HoverCards from '../../components/hover-cards/Hover-Cards';
import '../../assets/css/Development.css';

const Development = () => {
  const { developId } = useParams();
  return (
    <Layout>
      <Container className="development-container">
        <Row>
          <div className="development-div-1">
            {[
              ...experienceCards.filter(({ developId: id }) => {
                return developId === id;
              }),
            ].map(({ ruteImg, alt, titleImg, descImg, style }) => {
              return (
                <Col xs={12} lg={4}>
                  <HoverCards
                    ruteImg={ruteImg}
                    alt={alt}
                    titleImg={titleImg}
                    descImg={descImg}
                    style={style}
                  />
                </Col>
              );
            })}
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default Development;
