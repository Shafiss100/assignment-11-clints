import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Navebar.css";

const Navebar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Navbar
        className="navber container mb-5 d-flex d-flex justify-content-around"
        variant="light"
      >
        <Navbar.Brand href="/" className="brand w-50">
          <span className="text-success">Big</span>
          <span>Bazar</span>
          <span className="text-secondary">.com</span>
        </Navbar.Brand>
        <Nav className="w-100 ms-5">
          <Link className=" link" to={"/"}>
            Home
          </Link>
          <Link className=" link" to={"/inventory"}>
            Inventory
          </Link>
          <Link className=" link" to={"/addinvent"}>
            Add Inventory
          </Link>
          <Link className=" link" to={"/blog"}>
            Blog
          </Link>
          {user ? (
            <Link onClick={() => signOut(auth)} className="link" to={"/login"}>
              logout
            </Link>
          ) : (
            <Link className=" link" to={"/login"}>
              Login
            </Link>
          )}
          {user ? (
            <img className="userimg" src={user.photoURL} alt="" />
          ) : (
            <p></p>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navebar;
