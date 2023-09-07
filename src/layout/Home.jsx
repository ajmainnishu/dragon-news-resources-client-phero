import Header from "../Components/Header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSide from "../Components/RightSide/RightSide";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}></Col>
                    <Col xs={3}><RightSide></RightSide></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;