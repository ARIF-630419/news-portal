import { Button, Container } from "react-bootstrap";
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import "./Header.css"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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

    </Container>
  );
};

export default Header;