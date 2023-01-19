import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import sample1 from "../../assets/parallax2.webp";
import sample2 from "../../assets/parallax3.webp";
import sample3 from "../../assets/parallax4.webp";


const MainContainer = tw.div`
h-[150vh] w-full overflow-x-hidden`



function ScrollIntro() {
    gsap.registerPlugin(ScrollTrigger);
    const myref = useRef(null)

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(".simp",{
          y: -150,
          scrollTrigger:{
            trigger: ".simp",
            start:"top 80%",
            end:"top 30%",
            scrub: 0.5,
            // 
          }
        })
        gsap.to(".simp", {
          scale: 0,
          opacity: 0.5,
          scrollTrigger:{
            trigger: ".simp",
            start: "top 30%",
            end: "top 20%",
            scrub: 0.5,
            // 
          }
        })

        gsap.to(".simp2",{
          y: -200,
          scrollTrigger:{
            trigger: ".simp2",
            start:"top 80%",
            end:"top 30%",
            scrub: 1,
            
          }
        })
        gsap.to(".simp2", {
          scale: 0,
          opacity: 0.5,
          scrollTrigger:{
            trigger: ".simp2",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
            
          }
        })

        gsap.to(".simp3",
        { y: -200,
          scrollTrigger:{
            trigger: ".simp3",
            start: "top 80%",
            end:"top 30%",
            scrub: 1
          }
        })

        gsap.to(".simp4",
        { y: -300,
          scrollTrigger:{
            trigger: ".simp4",
            start: "top 80%",
            end:"top 30%",
            scrub: 1
          }
        })

        gsap.to(".text", {
          y: -150,
          scrollTrigger: {
            trigger: myref.current,
            start: "top 40%",
            end: "top 30%",
            scrub: 3,
          }
        })
      }, myref);
      return () => ctx.revert();
    }, []);
  return (
    <MainContainer ref={myref}>
        <img className="simp" tw="h-[20rem] w-[34rem] top-[115%] object-cover left-14 rounded-[2rem] absolute transition z-[2] drop-shadow-[var(--box-shadow)]" src={sample1}></img>
        <img className="simp2" tw="h-[20rem] w-[34rem] top-[120%] object-cover rounded-[2rem] absolute float-right right-[5rem] z-[2] drop-shadow-[var(--box-shadow)]" src={sample2}></img>
        <span className="text" tw="text-[black] top-[175%] left-[20rem] absolute z-[9] text-[5rem] font-['Michroma', sans-serif] drop-shadow-[var(--box-shadow)]">India's no.1 site</span>
        {/* <span className="text2" tw="text-[black] top-[190%] left-[20rem] fixed z-[3] text-[3rem]">India's no.1 site</span> */}
        <img className="simp3" src={sample3} tw="h-[20rem] w-[34rem] top-[195%] object-cover left-[-6rem] rounded-[2rem] absolute transition z-[2] drop-shadow-[var(--box-shadow)]" />
        <img className="simp4" src={sample3} tw="h-[20rem] w-[34rem] top-[185%] left-[25rem] object-cover rounded-[2rem] absolute transition z-[3] drop-shadow-[var(--box-shadow)]" />
        <img className="simp3" src={sample3} tw="h-[20rem] w-[34rem] top-[195%] float-right right-[1rem] object-cover rounded-[2rem] z-[2] absolute transition z-[2] drop-shadow-[var(--box-shadow)]" />
    </MainContainer>
  );
}

export default ScrollIntro;
