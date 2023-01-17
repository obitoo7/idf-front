import React, { useState, useEffect } from "react";
import tw from "twin.macro";

const ImageSlideContainer = tw.div`
relative
w-full`;

const Images = tw.img`
h-60 w-96 min-h-[60] min-w-[96]`;

function ImageSlide() {

  const comp = useref();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    let ctx = gsap.context(() => {
        gsap.to("")
    }, comp);
    return () => ctx.revert();

  }, []);
  return (
    <ImageSlideContainer ref={comp}>
      <Mask>
        <Images ref={imgone} src="" />
      </Mask>
    </ImageSlideContainer>
  );
}

export default ImageSlide;
