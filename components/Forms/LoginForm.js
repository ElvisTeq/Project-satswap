import classes from "./LoginForm.module.css";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const MDBBtn = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBBtn);
  },
  { ssr: false }
);

const MDBContainer = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBContainer);
  },
  { ssr: false }
);

const MDBRow = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBRow);
  },
  { ssr: false }
);

const MDBCol = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCol);
  },
  { ssr: false }
);

const MDBCard = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCard);
  },
  { ssr: false }
);

const MDBCardBody = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCardBody);
  },
  { ssr: false }
);

const MDBInput = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBInput);
  },
  { ssr: false }
);

const MDBIcon = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBIcon);
  },
  { ssr: false }
);

const LoginForm = () => {
  //_______________________________________________
  // Testing (Useless)
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const emailHandler = (event) => {
    console.log(event.target.value);
  };

  const passwordHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    setEmailState(event.target.value);
    setPasswordState(event.target.value);
  };
  //_______________________________________________

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="text-white my-5 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "400px",
              background: "#333333",
            }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={emailHandler}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={passwordHandler}
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                onClick={submitHandler}
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
              >
                Login
              </MDBBtn>

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Do not have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
