import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import tw from "twin.macro";
import data from "../../../fakedata/data.json";


const Slides = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Carousel tw="max-h-screen xl:h-screen lg:h-screen" style={{boxShadow: "0px 100px green inset"}} pause={false}>
      {data.slides.map((list, i) => {
        return (
          <Carousel.Item key={i}>
            <img tw="max-h-screen xl:h-screen lg:h-screen" className="d-block w-100" src={list.img} alt="slide" />
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
