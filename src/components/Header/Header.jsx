import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.scss";
import tw from "twin.macro";
import fitlogo from '../../assets/fitlogo.jpeg'
import img from "../../assets/react.svg";
import img2 from "../../assets/protp.jpg";

const NavDiv = tw.div`h-48 w-full p-4 bg-slate-900 rounded-lg flex flex-row items-center justify-between`;
const Header = () => {
  const [show, setShow] = useState(false); //state for component should visible or not

  let timeoutId; // it will contain the timeout id

  /*
  * There is a mouseenter event listner on the Link comp
  * the mouseenter event will fire the function named onEnter
  * on fired fire clear the previously setted timeout using its id
  * and then the show state will get changed to true
  * this will make the component visible
   */
  const onEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    } else {
      console.log("timeout chalu nhi hai");
    }
    setShow(true);
  };

  /*
  * when the mouseleave will fire the onLeave
  * it will set the timeout so the component dosen't get hidden immediately after the user leave the comp
  */
  const onLeave = () => {
    timeoutId = setTimeout(() => {
      setShow(false);
    }, 1500); 
  };

  return (
    <div className="fixed-top">
      <Navbar expand="xl" className="nav-container">
        <Container fluid>
          <Navbar.Brand tw="text-slate-50">
            <img
              src={fitlogo}
              width="30"
              height="30"
              className="logo d-inline-block align-top"
              alt="ideatofit logo"
            />{" "}
            <span className="brandname">Ideatofit</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link
              to="/"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="material-symbols-rounded">home</span>
              <span>Home</span>
            </Link>
            <Link
              to="/store"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="material-symbols-rounded">store</span>
              <span>Store</span>
            </Link>
            <Link
              to="/diet"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="material-symbols-rounded">nutrition</span>
              <span>Diet</span>
            </Link>
            <Link
              to="/blogs"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="material-symbols-rounded">article</span>
              <span>Blogs</span>
            </Link>
            <Link
              to="/tools"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span className="material-symbols-rounded">body_fat</span>
              <span>Tools</span>
            </Link>
            <Link
              to="/donate"
              className="link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <span class="material-symbols-rounded">volunteer_activism</span>
              <span>Donate</span>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavDiv
        css={[show ? "" : tw`hidden`]}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden relative">
          <img src={img2} tw="h-full w-full object-cover z-0 "/>
          <div tw="bg-slate-900 h-full w-full absolute z-10"></div>
        </div>
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden">
        <img src={img2} tw="h-full w-full object-cover"/>
        </div>
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden">
        <img src={img2} tw="h-full w-full object-cover"/>
        </div>
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden">
        <img src={img2} tw="h-full w-full object-cover"/>
        </div>
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden">
        <img src={img2} tw="h-full w-full object-cover"/>
        </div>
        <div tw="h-full w-full m-2 bg-orange-600 rounded-lg overflow-hidden">
        <img src={img2} tw="h-full w-full object-cover"/>
        </div>
      </NavDiv>
    </div>
  );
};

export default Header;
