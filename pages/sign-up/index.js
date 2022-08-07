import SignUpForm from "../../components/Forms/SignUpForm";
import Head from "next/head";
import { Fragment } from "react";

const SignUp = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpForm />
    </Fragment>
  );
};

export default SignUp;
