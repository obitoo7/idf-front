import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import tw from "twin.macro";

function CategoryCard(props) {
  return (
    <Card tw="shadow-xl max-w-[30%]">
      <Card.Img
        variant="top"
        tw="h-[90%] w-[100%] object-cover"
        src={props.img}
      />
      <Card.Body>
        <Card.Text>
          <strong>{props.label}</strong>
        </Card.Text>
        <Link to={`/tools/${props.path}`}>
          <Button tw="text-black mt-2">{props.path}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  path: PropTypes.string,
  img: PropTypes.string,
  label: PropTypes.string,
};

export default CategoryCard;
