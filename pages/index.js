import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { Fragment } from "react";
import ServiceDetails from "../components/services/ServiceDetail";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Satswap</title>
      </Head>
      <ServiceDetails />
      <h1>asda</h1>
    </Fragment>
  );
}
