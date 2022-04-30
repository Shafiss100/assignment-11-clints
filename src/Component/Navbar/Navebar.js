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
      <Navbar className="navber" variant="light">
        <Container className="navber">
          <Navbar.Brand href="/home" className="brand">
            <span className="text-success">Big</span>
            <span>Bazar</span>
            <span className="text-secondary">.com</span>
          </Navbar.Brand>
          <Nav>
            <Link className=" link" to={"/home"}>
              Home
            </Link>
            <Link className=" link" to={"/inventory"}>
              Inventory
            </Link>
            {user? (
              <Link onClick={()=>signOut(auth)} className="link" to={"/login"}>
                logout
              </Link>
            ) : (
              <Link className=" link" to={"/login"}>
                Login
              </Link>
                      )}
                      {
                          user? (<img className="userimg" src={user.photoURL} alt="" />):(<p></p>)
}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navebar;
