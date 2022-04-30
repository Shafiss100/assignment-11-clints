import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navebar.css";

const Navebar = () => {
  return (
    <div>
      <Navbar className="navber" variant="light">
        <Container className="navber">
          <Navbar.Brand href="#home" className="">
            Navbar
          </Navbar.Brand>
          <Nav>
            <Link className=" link" to={"/home"}>
              Home
            </Link>
            <Link className=" link" to={"/inventory"}>
              Inventory
            </Link>
            <Link className=" link" to={"/login"}>
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navebar;
