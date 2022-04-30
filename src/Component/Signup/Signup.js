import React from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const signup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container p-5 m-5 w-100">
      <Form onSubmit={signup} className="w-50 mx-auto my-auto">
        <h1 className="text-success">Plese sign up </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label name="name">User name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label name="email">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label name="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <input type="submit" className="btn bg-info border" value="Sign up" />

        <div className="w-100 mt-5 ">
          <Link className="ms-5" to={"/login"}>
            already have an acount
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
