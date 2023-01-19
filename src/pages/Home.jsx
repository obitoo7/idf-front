import { useEffect, useRef } from "react";
import tw from "twin.macro";
import Slides from "../components/Slides/Slides";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIntro from "../components/scrollIntro/ScrollIntro";


const HomeContainer = tw.div`
overflow-x-hidden
w-full
pt-[var(--header-height)]
max-sm:pt-[var(--header-height)]`;


const ArticleContainer = tw.div`
font-[var(--font-family)]
w-full
//small devices
max-sm:grid
max-sm:bg-slate-800
grid
grid-flow-col
gap-4
p-4`;

const ArticleSection = tw.div`
col-span-2
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
col-span-4
grid
grid-flow-row
items-center
gap-4
p-4
rounded-lg  
bg-slate-900`;

const ArticleNavItems = tw.div`
h-32 
rounded-lg
bg-slate-500`;

const VideoContainer = tw.div`
overflow-x-scroll
grid 
grid-flow-col 
gap-4 
p-4`;

const Videos = tw.div`
h-48 w-96 bg-slate-800`;

const ToolsContainer = tw.div`
w-full p-4 grid grid-flow-col place-items-center`;

const Footer = tw.div`
h-[50vh] w-full bg-slate-900`;

function Home() {

  return (
    <HomeContainer>
      {/* slides */}
      <Slides />
      {/* animtion intro */}
      <ScrollIntro/>
      {/* article content section */}
      <Label>Article's</Label>
      <ArticleContainer>
        <ArticleNav>
          <ArticleNavItems />
          <ArticleNavItems />
          <ArticleNavItems />
        </ArticleNav>
        <ArticleSection>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ArticleSection>
      </ArticleContainer>
      {/* video section */}
      <Label>Video's</Label>
      <VideoContainer>
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
      </VideoContainer>
      {/* tools */}
      <Label>Tool's</Label>
      <ToolsContainer>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ToolsContainer>
      {/* footer */}
      <Footer />
    </HomeContainer>
  );
}

export default Home;