import Layout from '../../layouts/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import HoverCards from '../../components/hover-cards/Hover-Cards';
//import InfoCards from '../../components/hover-cards/InfoCards';
import image01 from '../../assets/img/banner-pagina-inicio-chica.png';
import image02 from '../../assets/img/theDM.png';

const About = () => {
    return (
        <Layout>
            <Container>
            <div className="home-container">
                    <h1>Mis trabajos como desarrollador</h1>
                    <Row>
                        <Col xs={12} lg={6}>
                            <HoverCards
                                ruteImg={image01}
                                alt="Seridma"
                                titleImg="Seridma App con React.js"
                                descImg="Se desarrollo una app con React.js del lado del cliente, con la finalidad de promocionar el servicio de fumigación" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <HoverCards
                                ruteImg={image02}
                                alt="TheDieselMarket"
                                titleImg="TheDieselMarket rest api con React.js"
                                descImg="Se desarrollo una api rest para la venta y compra de diesel en la zona de Nuevo León" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    )
}

export default About;