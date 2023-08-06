import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Condition</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime illo reiciendis dolores impedit numquam libero suscipit fuga quae eos aspernatur ad esse veritatis reprehenderit, consectetur ut? Animi, architecto doloremque consequatur, fugit, ullam quos laudantium laboriosam ad perspiciatis nihil ipsum eos repudiandae quaerat minima quasi vero doloribus maiores at voluptatum.</p>
      <p>Go back to <Link to="/register">Register</Link></p>
    </Container>
  );
};

export default Terms;