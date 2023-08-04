import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import LeftNav from "../Pages/Shared/leftNav/leftNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>

        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>Main Content</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;