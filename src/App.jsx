import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

//pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import Diet from "./pages/Diet";
import Tools from "./pages/Tools";
import BlogContent from "./pages/BlogContent";

//other imports
import ScrollIntro from "./components/scrollIntro/ScrollIntro";
import tw from "twin.macro";
import BmrCalc from "./components/Tools/BodyFatCalc";
import BodyFatCalc from "./components/Tools/BodyFatCalc";
import MacroCalc from "./components/Tools/MacroCalc";
// import ProductContainer from "./components/ProductContainer/ProductContainer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogContent />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/tools" element={<Tools />}>
          <Route path="/tools/bmrcalc" element={<BmrCalc/>}/>
          <Route path="/tools/bodyfatcalc" element={<BodyFatCalc/>}/>
          <Route path="/tools/macrocalc" element={<MacroCalc/>}/>
        </Route>
      </Routes>
    </div>
    // <ProductContainer/>
  );
}

export default App;
