import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import tw from "twin.macro";
import data from "../../../fakedata/data.json";

const Title = tw.h1`
text-[4rem]
max-sm:text-[2rem]`

const Para = tw.p`
text-[2rem]`


const Slides = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Carousel tw="max-h-screen p-4 xl:h-[calc(100vh - var(--header-height))] lg:h-screen drop-shadow-[var(--box-shadow)]" pause={false}>
      {data.slides.map((list, i) => {
        return (
          <Carousel.Item key={i}>
            <img tw="object-cover xl:h-[calc(100vh - var(--header-height) - 2rem)] lg:h-screen rounded-lg" className="d-block w-100" src={list.img} alt="slide" />
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
