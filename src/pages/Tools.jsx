import { Outlet, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { ToolsContainer } from "../styledcomponents/_Tools";
import Card from "react-bootstrap/Card";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import runningGirl from "../assets/running.jpg"
import nutrients from "../assets/nutrient.jpg"
import obese from "../assets/obese.jpg"
const ToolsShortcut = tw.div`
flex flex-row justify-evenly`;

const Tools = () => {
  const route = useLocation().pathname;
  console.log(route);
  return (
    <>
      <div tw="h-fit w-full flex flex-col overflow-scroll">
        <div tw="h-[100vh] w-full flex items-center flex-col">
        <Outlet />
        </div>
        <ToolsShortcut>
          <CategoryCard path="bmrcalc" img={runningGirl} label="Bmr Calculator"/>
          <CategoryCard path="macrocalc" img={nutrients} label="Macro Calculator"/>
          <CategoryCard path="bodyfatcalc" img={obese} label="BodyFat Calculator"/>
        </ToolsShortcut>
      </div>
    </>
  );
};

export default Tools;
