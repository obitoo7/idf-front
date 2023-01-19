import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import tw from "twin.macro";
import data from "../../../fakedata/data.json";

const Title = tw.h1`
text-[4rem]`

const Para = tw.p`
text-[2rem]`


const Slides = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Carousel tw="max-h-screen xl:h-[calc(100vh - var(--header-height))] lg:h-screen" pause={false}>
      {data.slides.map((list, i) => {
        return (
          <Carousel.Item key={i}>
            <img tw="max-h-screen object-cover xl:h-[calc(100vh - var(--header-height))] lg:h-screen" className="d-block w-100" src={list.img} alt="slide" />
            <Carousel.Caption>
              <Title>{list.title}</Title>
              <Para>{list.para}</Para>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slides;
