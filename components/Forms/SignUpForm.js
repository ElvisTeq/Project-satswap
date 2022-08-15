import "./SignUpForm.module.css";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// } from "mdb-react-ui-kit";

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

const MDBTabsPane = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBTabsPane);
  },
  { ssr: false }
);

const MDBCardBody = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCardBody);
  },
  { ssr: false }
);

const MDBCard = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCard);
  },
  { ssr: false }
);

const MDBInput = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBInput);
  },
  { ssr: false }
);

const MDBCol = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCol);
  },
  { ssr: false }
);

const MDBCheckbox = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBCheckbox);
  },
  { ssr: false }
);

const MDBIcon = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBIcon);
  },
  { ssr: false }
);

const MDBRow = dynamic(
  () => {
    return import("mdb-react-ui-kit").then((mod) => mod.MDBRow);
  },
  { ssr: false }
);

const SignUpForm = () => {
  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={
          {
            // background
          }
        }
      ></div>

      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          borderRadius: "1rem",
          marginTop: "-80px",
          background: "#333333",
          backdropFilter: "blur(30px)",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">Sign Up</h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="First name"
                id="form1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Last name"
                id="form1"
                type="text"
              />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn outline className="mx-2 px-5 w-50" color="white" size="lg">
            sign up
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

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
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUpForm;
