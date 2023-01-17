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
h-screen
overflow-hidden
bg-slate-800
`;

const Img = tw.img`
rounded-md
`;

const ArticleContainer = tw.div`
w-full
//small devices
max-sm:grid
max-sm:bg-slate-800
grid
grid-flow-col
gap-4
p-4
`;

const ArticleSection = tw.div`
col-span-2
h-32 
w-full 
grid 
grid-cols-3
gap-4`;

const Label = tw.label`
text-[4rem] 
m-4 
mb-0
`;

const ArticleNav = tw.div`
col-span-8
grid
grid-flow-row
items-center
gap-4
p-4
bg-slate-900`;

const ArticleNavItems = tw.div`
h-32 
rounded-lg
bg-slate-500`;

const Section = tw.div`
min-w-[16rem]
w-80
h-48
rounded-lg
bg-slate-300`;

const VideoContainer = tw.div`
overflow-x-scroll
grid 
grid-flow-col 
gap-4 
p-4`

const Videos = tw.div`
h-48 w-96 bg-slate-800`

function Home() {
  return (
    <HomeContainer>
      <Slides />
      <AnimationIntro></AnimationIntro>
      {/* article content section */}
      <Label>Article's</Label>
      <ArticleContainer>
        <ArticleNav>
        <ArticleNavItems/>
        <ArticleNavItems/>
        <ArticleNavItems/>
        <ArticleNavItems/>
        <ArticleNavItems/>
        </ArticleNav>
        <ArticleSection>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        </ArticleSection>
      </ArticleContainer>
      {/* video section */}
      <Label>Video's</Label>
      <VideoContainer>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      </VideoContainer>
      {/* tools */}
      
    </HomeContainer>
  );
}

export default Home;
