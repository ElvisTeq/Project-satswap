import SignUpForm from "../../components/Forms/SignUpForm";
import Head from "next/head";
import { Fragment } from "react";

const SignUp = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <SignUpForm />
    </Fragment>
  );
};

export default SignUp;
