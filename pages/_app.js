import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
