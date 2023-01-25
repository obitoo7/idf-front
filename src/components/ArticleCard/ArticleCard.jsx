import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gsap from 'gsap';
import tw from 'twin.macro';

function ArticleCard(props) {

  const cardref = useRef()

  return (
    <Card variant="dark" ref={cardref} tw='hover:scale-[1.02] transition'>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
