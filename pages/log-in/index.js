import LoginForm from "../../components/Forms/LoginForm";
import Head from "next/head";
import { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <LoginForm />
    </Fragment>
  );
};

export default Login;
