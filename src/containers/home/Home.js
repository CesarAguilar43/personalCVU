import '../../assets/css/Home.css';
import Layout from '../../layouts/Layout';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Layout>
            <Container>
            <div className="home-container">
                <h1>This was my home of my website.</h1>
            </div>
            </Container>
        </Layout>
    )
}

export default Home;