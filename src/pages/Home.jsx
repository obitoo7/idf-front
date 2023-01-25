import { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import Slides from "../components/Slides/Slides";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ScrollIntro from "../components/scrollIntro/ScrollIntro";
import { Route, Routes } from "react-router-dom";
import fkdata from '../../fakedata/data.json';
import gsap from "gsap";
import { Tween } from "gsap/gsap-core";

// component tree:
// HomeContainer -> main div which contains all the elements
// ArticleContainer -> ArticleNav & ArticleSection -> ArticleContainer has a child name ArticleSection & ArticleNav
// ArticleSection -> contians article cards to display
// ArticleNav -> ArticleNavItems -> contians the nav on the left of the article section to navigate users in different categories
// VideosContainer -> videos -> videos section to show videos
// ToolsContainer -> contians tools cards
// Footer -> this one doesn't need any explanation

const HomeContainer = tw.div`
overflow-x-hidden
w-full
pt-[var(--header-height)]
max-sm:pt-[var(--header-height)]`;

const ArticleMainContainer = tw.div`
w-full grid grid-flow-col items-center`;

const Articles = tw.div`
grid grid-flow-col items-center gap-4
max-sm:grid-flow-row
max-sm:p-4`;

const ArticleNavContainer = tw.div`
grid grid-flow-row p-4 gap-4 min-w-[20rem]
max-sm:hidden`;

const ArticleNavs = tw.div`
h-32 rounded-xl bg-slate-800 transition hover:scale-[1.02]`;

const Label = tw.label`
text-[4rem] max-sm:text-[3rem]
m-4 
mb-0
`;

const VideoContainer = tw.div`
overflow-x-scroll
grid 
grid-flow-col 
gap-4 
p-4`;

const Videos = tw.div`
h-48 w-96 bg-slate-800`;

const ToolsContainer = tw.div`
w-full 
p-4 
grid
grid-flow-col 
gap-4
max-sm:grid
max-sm:grid-flow-row
place-items-center`;

const Footer = tw.div`
h-[50vh] w-full bg-slate-900`;

const Home = () => {
  const [sect, setSect] = useState(0);
  const [whichCategoryToDisplay, setWhichCategoryToDisplay] = useState([])

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count > 1) {
        count = 0;
      } else count++;
      setSect(count);
      setWhichCategoryToDisplay(fkdata['top'][count])
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeContainer>
      {/* slides */}
      <Slides />
      <Routes>
        <Route
          path="/tools/bmicalculator"
          element={
            <div tw="h-screen w-full bg-slate-800">
              hello there my name is shivam pal
            </div>
          }
        />
      </Routes>
      {/* animtion intro */}
      {/* <ScrollIntro/> */}
      <ScrollIntro />
      {/* article content section */}
      <Label>Article's</Label>
      <ArticleMainContainer>
        <ArticleNavContainer>
          {
            fkdata['top'].map((list, i)=>{
              return <ArticleNavs css={[i === sect ? tw`bg-amber-600`:""]}/>
            })
          }
          {/* <ArticleNavs css={[sect === 0 ? tw`bg-amber-700` : ""]}></ArticleNavs>
          <ArticleNavs css={[sect === 1 ? tw`bg-amber-700` : ""]}></ArticleNavs>
          <ArticleNavs css={[sect === 2 ? tw`bg-amber-700` : ""]}></ArticleNavs>
          <ArticleNavs css={[sect === 3 ? tw`bg-amber-700` : ""]}></ArticleNavs> */}
        </ArticleNavContainer>
        <Articles>
          {
            whichCategoryToDisplay.map((lis)=>{
              return <ArticleCard src={lis['img']} title={lis['title']} desc={lis['description']}/>
            })
          }
        </Articles>
      </ArticleMainContainer>
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
};

export default Home;
