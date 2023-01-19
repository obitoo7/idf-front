import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import sample1 from "../../assets/parallax1.webp";


const MainContainer = tw.div`
h-[100vh] w-full bg-slate-900`



function ScrollIntro() {
    gsap.registerPlugin(ScrollTrigger);
    const myref = useRef(null)

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to("#simp",{
          y: -100,
          scrollTrigger:{
            trigger: "#simp",
            start:"top 80%",
            end:"top 30%",
            scrub: 1,
            markers: true
          }
        })
        gsap.to("#simp", {
          scale: 0,
          opacity: 0.5,
          scrollTrigger:{
            trigger: "#simp",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
            markers: true
          }
        })
      }, myref);
      return () => ctx.revert();
    }, []);
  return (
    <MainContainer ref={myref}>
        <img id="simp" tw="h-[20rem] w-[34rem] top-[110%] object-cover left-14 rounded-lg z-40 absolute transition" src={sample1}></img>
        <img id="simp2" tw="h-[20rem] w-[34rem] top-[120%] object-cover rounded-lg z-40 absolute float-right right-[5rem] opacity-0" src={sample1}></img>
    </MainContainer>
  );
}

export default ScrollIntro;
