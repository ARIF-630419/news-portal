import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => { console.log(error.message) })
  }
  return (
    <Container>
      <Navbar className="mt-4 mb-4 bg-secondary" collapseOnSelect expand="lg" >
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">

              <Link className="text-white text-decoration-none me-2" to="/categoris/0">Home</Link>


              <Link className="text-white text-decoration-none me-2" to="/about">About</Link>


              <Link className="text-white  text-decoration-none me-2" to="/carrer">Carrer</Link>


            </Nav>
            <Nav className="align-items-center">
              {user &&
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              }

              {user ? <Button onClick={handleLogout} variant="secondary " className="m-2">Logout</Button> : <Link to="/login"><Button variant="secondary " className="m-2">Login</Button> </Link>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;