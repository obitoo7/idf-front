import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import tw from "twin.macro";
import data from "../../../fakedata/data.json";


const Slides = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Carousel tw="max-h-screen " pause={false}>
      {data.slides.map((list) => {
        return (
          <Carousel.Item key={list.img}>
            <img tw="max-h-screen" className="d-block w-100" src={list.img} alt="slide" />
            <Carousel.Caption>
              <h3>{list.title}</h3>
              <p>{list.para}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slides;
