import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard() {
  return (
    <Card variant="dark">
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?size=626&ext=jpg&ga=GA1.2.533651669.1673186776&semt=sph" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
