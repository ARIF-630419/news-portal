import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import "./Header.css"
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p><small className="text-secondary">Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="d-flex bg-color " >
        <Button variant="danger " className="m-2">Danger</Button>
        <Marquee className="text-danger" speed={50}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar className="mt-2 mb-2" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Carrer</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary " className="m-2">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;