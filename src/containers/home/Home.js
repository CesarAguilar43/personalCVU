import '../../assets/css/Home.css';
import Layout from '../../layouts/Layout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HomeImage from '../../assets/img/homeImage.jpeg';

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
                                soy Ingeniero en Sistemas Computacionales con un posgrado en 
                                Ciencias de la Computación. 
                                Soy una persona con pasión por la enseñanza,
                                empatía, con actitud positiva y ganas de aprender tecnologías
                                nuevas.</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <figure className="fg-home-image-1">
                            <Image src={HomeImage} alt="Home image" roundedCircle className="home-image-1" />
                        </figure>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;