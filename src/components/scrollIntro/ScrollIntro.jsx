import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import sample1 from "../../assets/parallax1.webp";


const MainContainer = tw.div`
h-[200vh] w-full bg-slate-900`

function ScrollIntro() {
    gsap.registerPlugin(ScrollTrigger);
    const myref = useRef(null)

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.timeline()
        .from(myref.current,{
            scrollTrigger: {
                trigger: myref.current,
                start: "top",
                end: "bottom",
                toggleActions: "restart none none none",
                markers: true,
            }
        }).from("#simp", {
            y: 500,
            scrollTrigger:{
                trigger: myref.current,
                start: "50% top",
                end: "80% top",
                scrub: 1,
                toggleActions: "restart none none none",
                markers: true
            }
        })
      }, myref);
      return () => ctx.revert();
    }, []);
  return (
    <MainContainer ref={myref}>
        <img id="simp" src={sample1}></img>
    </MainContainer>
  );
}

export default ScrollIntro;
