import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home";
import Store from "./pages/store";
import Blogs from "./pages/blogs";
import Diet from "./pages/diet";
import Tools from "./pages/tools";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  );
}

export default App;
