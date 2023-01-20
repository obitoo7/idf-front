import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";
import { Link } from "react-router-dom";
import img from "../../assets/react.svg";
import tw from "twin.macro";
import { useState } from "react";

const NavDiv = tw.div`h-28 w-full bg-slate-900 transition hidden`;
const Header = () => {
  return (
    <div className="fixed-top">
      <Navbar expand="xl" className="nav-container">
        <Container fluid>
          <Navbar.Brand tw="text-slate-50">
            <img
              src={img}
              width="30"
              height="30"
              className="logo d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            <span className="brandname">React Bootstrap</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to="/" className="link">
              <span className="material-symbols-rounded">home</span>
              <span>Home</span>
            </Link>
            <Link to="/store" className="link">
              <span className="material-symbols-rounded">store</span>
              <span>Store</span>
            </Link>
            <Link to="/diet" className="link">
              <span className="material-symbols-rounded">nutrition</span>
              <span>Diet</span>
            </Link>
            <Link to="/blogs" className="link">
              <span className="material-symbols-rounded">article</span>
              <span>Blogs</span>
            </Link>
            <Link to="/tools" className="link">
              <span className="material-symbols-rounded">body_fat</span>
              <span>Tools</span>
            </Link>
            <Link to="/donate" className="link">
              <span class="material-symbols-rounded">volunteer_activism</span>
              <span>Donate</span>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavDiv></NavDiv>
    </div>
  );
};

export default Header;
