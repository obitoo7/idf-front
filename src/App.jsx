import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

//pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import Diet from "./pages/Diet";
import Tools from "./pages/Tools";
import Bmicalc from "./container/bmicalc";

//other imports
import ScrollIntro from "./components/scrollIntro/ScrollIntro";
import tw from "twin.macro";
// import ProductContainer from "./components/ProductContainer/ProductContainer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/tools" element={<Tools />}>
        </Route>
      </Routes>
    </div>
    // <ProductContainer/>
  );
}

export default App;
