import Layout from '../../layouts/Layout';
import { Container, Row} from 'react-bootstrap';

const Development = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <div style={{ height: '100vh' }}>
                        <h1 style={{margin: '100px'}}>
                            Hola mundo!
                        </h1>
                    </div>
                </Row>
            </Container>
        </Layout>
    )
}

export default Development;