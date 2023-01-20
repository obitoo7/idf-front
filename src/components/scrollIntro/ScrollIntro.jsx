import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import sample1 from "../../assets/parallax2.webp";
import sample2 from "../../assets/parallax3.webp";
import sample3 from "../../assets/parallax4.webp";

const MainContainer = tw.div`
h-[150vh] 
max-sm:h-[100vh] 
w-full 
overflow-x-hidden`;

const AnimationImg1 = tw.img`
absolute
h-[20rem]
w-[34rem]
top-[115%]
left-14
object-cover
rounded-[2rem]
opacity-[0.9]
drop-shadow-[var(--box-shadow)]
z-[2]

max-sm:h-[15rem]
max-sm:w-[100%]
max-sm:left-[0]
max-sm:rounded-xl
max-sm:float-right
max-sm:right-0
max-sm:top-[65%]
`;
const AnimationImg2 = tw.img`
absolute
h-[20rem]
w-[34rem]
top-[120%]
object-cover
rounded-[2rem]
opacity-[0.9]
drop-shadow-[var(--box-shadow)]
z-[2]

max-sm:h-[15rem]
max-sm:w-[100%]
max-sm:left-[0]
max-sm:rounded-xl
max-sm:top-[85%]

xl:float-right
xl:right-[5rem]
`;
const AnimationImg3 = tw.img`
h-[20rem]
w-[34rem]
max-sm:h-[10rem]
max-sm:w-[14rem]
top-[185%]
object-cover
left-[-6rem]
rounded-[2rem]
absolute
transition
z-[2]
drop-shadow-[var(--box-shadow)]
`;
const AnimtationImg4 = tw.img`
h-[20rem]
w-[34rem] 
max-sm:h-[10rem]
max-sm:w-[14rem]
top-[175%]
left-[25rem]
object-cover
rounded-[2rem]
absolute
transition
z-[3]
drop-shadow-[var(--box-shadow)]`;

const AnimationImg5 = tw.img`
h-[20rem]
w-[34rem]
max-sm:w-[100%]
max-sm:top-[110%]
top-[185%]
float-right
right-[1rem]
object-cover
rounded-[2rem]
z-[2]
absolute
transition
z-[2]
drop-shadow-[var(--box-shadow)]`;

function ScrollIntro() {
  gsap.registerPlugin(ScrollTrigger);
  const myref = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 720) {
      let ctx = gsap.context(() => {
        gsap.to(".simp", {
          y: -200,
          scrollTrigger: {
            trigger: ".simp",
            start: "top 80%",
            end: "top 30%",
            scrub: 0.5,
            //
          },
        });
        gsap.to(".simp", {
          scale: 0,
          opacity: 0.5,
          scrollTrigger: {
            trigger: ".simp",
            start: "top 30%",
            end: "top 20%",
            scrub: 0.5,
            //
          },
        });

        gsap.to(".simp2", {
          y: -250,
          scrollTrigger: {
            trigger: ".simp2",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });
        gsap.to(".simp2", {
          scale: 0,
          opacity: 0.5,
          scrollTrigger: {
            trigger: ".simp2",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
          },
        });

        gsap.to(".simp3", {
          y: -150,
          scrollTrigger: {
            trigger: ".simp3",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });

        gsap.to(".simp4", {
          y: -250,
          scrollTrigger: {
            trigger: ".simp4",
            start: "top 80%",
            end: "top 30%",
            scrub: 2,
          },
        });

        gsap.to(".text", {
          y: -150,
          scrollTrigger: {
            trigger: myref.current,
            start: "top 40%",
            end: "top 30%",
            scrub: 3,
          },
        });
      }, myref);
      return () => ctx.revert();
    }
  }, []);

  return (
    <MainContainer ref={myref}>
      <AnimationImg1 src={sample1} className="simp" />
      <AnimationImg2 src={sample2} className="simp2" />
      <span className="text" tw="text-[black] top-[175%] left-[20rem] absolute z-[9] text-[5rem] max-sm:text-[2rem] font-['Michroma', sans-serif] drop-shadow-[var(--box-shadow)]">India's no.1 site</span>
      {/* <span className="text2" tw="text-[black] top-[190%] left-[20rem] fixed z-[3] text-[3rem]">India's no.1 site</span> */}
      <AnimationImg3 className="simp3" src={sample3} />
      <AnimtationImg4 className="simp4" src={sample3} />
      <AnimationImg5 className="simp3" src={sample3} />
    </MainContainer>
  );
}

export default ScrollIntro;
