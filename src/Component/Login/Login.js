import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {
  useAuthState,
  useSendEmailVerification,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { sendSignInLinkToEmail } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, euser, eloading, eerror] =
    useSignInWithEmailAndPassword(auth);
  const emailLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    sendSignInLinkToEmail(auth, email)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        console.log(error.message);
      });
    await fetch("http://localhost:5000/token", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
      });

    if (user) {
      navigate("/");
      
    } 
  };
  //  --------   gooogle log in--------
  const googlelogin = (event) => {
    event.preventDefault();
    signInWithGoogle();
    navigate("/");
  };

  return (
    <div className="container p-5 m-5">
      <Form onSubmit={emailLogin} className="w-50 mx-auto my-auto">
        <h1 className="text-success">Plese Log in</h1>
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
        {eerror ? <p className="m-3 text-danger">{eerror.message}</p> : <></>}
        <input type="submit" className="btn bg-info border" value="log in" />

        <div className="w-100 ">
          <Button
            onClick={googlelogin}
            className="m-5 mx-auto d-flex"
            variant="primary"
            type="login"
          >
            Log in with google
          </Button>
        </div>
        <Link to="/signup">creacte a new acount</Link>
      </Form>
    </div>
  );
};

export default Login;
