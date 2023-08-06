import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInside from "../EditorInside/EditorInside";

const NewsDetails = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/categoris/${category_id}`}> <Button className="" variant="secondary"><FaArrowLeft></FaArrowLeft>All News in this Category</Button></Link>
        </Card.Body>
      </Card>
      <EditorInside></EditorInside>
    </div>
  );
};

export default NewsDetails;