import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Cards = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <div>
      <Card >
        <Card.Header className="d-flex  align-items-center">
          <Image style={{ width: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>{moment(author?.published_date).format("yyyy-DD-M")}</p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url} alt="Card image" />
          <Card.Text>
            {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 d-flex align-items-center">

            <Rating style={{ maxWidth: 150 }} value={rating?.number || 0} readOnly />
            <span className="ms-2">{rating?.number}</span>

          </div>
          <div>
            <FaRegEye className="me-2"></FaRegEye>
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;