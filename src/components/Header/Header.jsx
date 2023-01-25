import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.scss";
import tw from "twin.macro";
import fitlogo from "../../assets/idflogo.png";
import img from "../../assets/react.svg";
import img2 from "../../assets/protp.jpg";
import protienGif from "../../assets/protein.png";
import equipmentPng from "../../assets/gym.png";
import supplimentPng from "../../assets/vitamin.png";

const NavDiv = tw.div`h-48 w-full p-4 bg-white shadow-lg rounded-lg flex flex-row items-center justify-between`;
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
    }, 700);
  };

  return (
    <div className="fixed-top">
      <Navbar expand="xl" className="nav-container">
        <Container fluid>
          <Navbar.Brand tw="text-black">
            <img
              src={fitlogo}
              className="logo d-inline-block align-top"
              alt="ideatofit logo"
            />{" "}
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
        <div tw="h-full w-full m-2 rounded-lg overflow-hidden grid place-items-center">
          <img
            src={protienGif}
            tw="h-[100%] w-[25%]"
            alt=""
          />
          <span tw="text-lg">Mass Gainers</span>
        </div>
        <div tw="h-full w-full m-2 rounded-lg overflow-hidden grid place-items-center">
          <img
            src={equipmentPng}
            tw="h-[100%] w-[25%]"
            alt=""
          />
          <span tw="text-lg">Mass Gainers</span>
        </div>
        <div tw="h-full w-full m-2 rounded-lg overflow-hidden grid place-items-center">
          <img
            src={supplimentPng}
            tw="h-[100%] w-[25%]"
            alt=""
          />
          <span tw="text-lg">Mass Gainers</span>
        </div>
      </NavDiv>
    </div>
  );
};

export default Header;
