import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaGofore, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import img1 from "../../../assets/qZone1.png"
import img2 from "../../../assets/qZone2.png"
import img3 from "../../../assets/qZone3.png"
import background from "../../../assets/bg.png"

import "./RightNav.css"
const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle>Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Login with  Github</Button>
      <div className="mt-3">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaGofore></FaGofore>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitterSquare></FaTwitterSquare>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="bg text-center py-4 my-4">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default RightNav;