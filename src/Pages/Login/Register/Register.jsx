import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password, photoUrl, email);
    createUser(email, password)
      .then(result => {
        const create_user = result.user;
        console.log(create_user);
      }).catch(error => console.log(error.message));
  }
  const handleAccept = (event) => {
    setAccept(event.target.checked);
    console.log(event.target.checked);

  }
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" required placeholder="Enter Photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccept} type="checkbox" name="accept" label={<>Accept <Link to="/terms"> Terms and Condition</Link></>} />
        </Form.Group>
        <Button variant="primary" disabled={!accept} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          All ready have an Account ? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;