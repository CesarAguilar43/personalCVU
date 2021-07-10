import { useEffect } from 'react';
import Layout from '../../layouts/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/About.css';



const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Layout>
            <Container className="about-container">
                <Row>
                    <Col xs={12} lg={12}>
                        <div className="about-div-1">
                            <h1>Acerca de mi</h1>
                            <hr />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default About;