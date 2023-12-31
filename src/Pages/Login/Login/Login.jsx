import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { loginuser } = useContext(AuthContext);
  console.log(loginuser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/categoris/0";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginuser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from);

      })
      .catch(error => console.log(error.message));

  }
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Dont have an Account ? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;