import { useEffect, useState } from "react";

// this are the styled components not the actual components
import {
  HomeContainer,
  Label,
  ArticleMainContainer,
  ArticleNavContainer,
  ArticleNavs,
  Articles,
  VideoContainer,
  Videos,
  ToolsContainer,
  Footer,
} from "../styledcomponents/_Home";

import tw from "twin.macro";
import Slides from "../components/Slides/Slides";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ScrollIntro from "../components/scrollIntro/ScrollIntro";
import fkdata from "../../fakedata/data.json";
import { Link } from "react-router-dom";

const Home = () => {
  const [sect, setSect] = useState(0);
  const [whichCategoryToDisplay, setWhichCategoryToDisplay] = useState([]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = count === fkdata["top"].length - 1 ? 0 : (count += 1);
      setSect(count);
      setWhichCategoryToDisplay(fkdata["top"][count]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeContainer>
      <Slides />

      <ScrollIntro />

      <Label>Article's</Label>
      <ArticleMainContainer>
        <ArticleNavContainer>
          {fkdata["top"].map((list, i) => {
            return (
              <ArticleNavs
                css={[i === sect ? tw`bg-amber-600` : ""]}
              >
                <span className=""></span>
              </ArticleNavs>
            );
          })}
        </ArticleNavContainer>

        <Articles>
          {whichCategoryToDisplay.map((lis) => {
            return (
              <Link to={lis["path"]}>
                <ArticleCard
                  src={lis["img"]}
                  title={lis["title"]}
                  desc={lis["description"]}
                />
              </Link>
            );
          })}
        </Articles>
      </ArticleMainContainer>
      <Label>Video's</Label>
      <VideoContainer></VideoContainer>
      <Label>Tool's</Label>
      <ToolsContainer></ToolsContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
