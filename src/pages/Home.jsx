import { useEffect, useRef } from "react";
import tw from "twin.macro";
import Slides from "../components/Slides/Slides";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeContainer = tw.div`
w-full
max-sm:pt-[var(--header-height)]`;

const AnimationIntro = tw.div`
max-sm:grid
max-sm:grid-cols-1
max-sm:gap-4
max-sm:p-4
sm:grid
sm:grid-cols-1
sm:gap-4
sm:p-4
xl:grid
xl:grid-cols-2
overflow-hidden
bg-slate-800
`;

const Img = tw.img`
rounded-md
`;

const Mask = tw.div`
z-40
opacity-[0.8]
h-full w-full bg-slate-800`;

const ArticleContainer = tw.div`
w-full
//small devices
max-sm:grid
max-sm:bg-slate-800
grid
grid-flow-row
gap-4
p-4
`;

const ArticleSections = tw.div`
h-32 w-full`

const Label = tw.label`
text-[3.5rem] m-8 mb-0
`

const Section = tw.div`
min-w-[16rem]
w-80
h-48
rounded-lg
bg-slate-300`;

function Home() {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".images1", {
        opacity: 1, //set the final opacity to 1
        duration: 1,
        scrollTrigger: {
          trigger: ".images1",
          start: "top 80%",
          end: "top 40%",
          scrub: 3,
          toggleActions: "restart none none none",
          markers: {
            startColor: "red",
            endColor: "fuchsia",
            fontSize: "1rem",
          },
        },
      });

      gsap.to(".images1", {
        opacity: 1, //set the final opacity to 1
        duration: 1,
        scrollTrigger: {
          trigger: ".images1",
          start: "top 80%",
          end: "top 40%",
          scrub: 3,
          toggleActions: "restart none none none",
          markers: {
            startColor: "red",
            endColor: "fuchsia",
            fontSize: "1rem",
          },
        },
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <HomeContainer>
      <Slides />
      <AnimationIntro ref={comp}>
        <Img
          style={{ opacity: 0, height:"15rem", width:"25rem" }} //set the initial opacity to 0
          alt="images"
          className="images1"
          src="https://images.unsplash.com/photo-1673643203499-23c29eafead7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        />
        <Mask>
          <Img
            style={{ opacity: 0, height:"15rem", width:"25rem" }} //set the initial opacity to 0
            alt="images"
            className="images1"
            src="https://images.unsplash.com/photo-1673643203499-23c29eafead7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          />
        </Mask>
      </AnimationIntro>
      <ArticleContainer>
        <ArticleCard/>
      </ArticleContainer>
    </HomeContainer>
  );
}

export default Home;
