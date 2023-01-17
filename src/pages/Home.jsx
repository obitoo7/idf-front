import { useEffect } from "react";
import tw from "twin.macro";
import Slides from "../components/Slides/Slides";

const HomeContainer = tw.div`
w-full`;

const ArticleContainer = tw.div`
w-full
//small devices
sm:grid`

function home() {
  return (
    <HomeContainer>
      <Slides />

    </HomeContainer>
  );
}

export default home;
