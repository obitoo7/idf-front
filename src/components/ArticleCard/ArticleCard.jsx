import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gsap from 'gsap';

function ArticleCard() {

  const cardref = useRef()

  useEffect(()=>{
    gsap.to(cardref.current, {
      y: -10
    })
  }, [])
  return (
    <Card variant="dark" ref={cardref}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?size=626&ext=jpg&ga=GA1.2.533651669.1673186776&semt=sph" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
