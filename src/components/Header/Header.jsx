import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";
import { Link } from "react-router-dom";
import img from "../../assets/react.svg";
import tw from "twin.macro"

const Header = () => {
  return (
    <Navbar expand="xl" tw="bg-slate-800 " className="nav-container fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" tw="text-slate-50">
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
          <Nav className="me-auto">
            <Nav.Link href="#home">
              {" "}
              <Link to="/" className="link">
                <span className="material-symbols-rounded">home</span>
                <span>Home</span>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#home">
              {" "}
              <Link to="/store" className="link">
                <span className="material-symbols-rounded">store</span>
                <span>Store</span>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/diet" className="link">
                <span className="material-symbols-rounded">nutrition</span>
                <span>Diet</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blogs" className="link">
                <span className="material-symbols-rounded">article</span>
                <span>Blogs</span>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/tools" className="link">
                <span className="material-symbols-rounded">body_fat</span>
                <span>Tools</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;