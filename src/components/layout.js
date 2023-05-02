import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Blockus</title>
      <meta name="Crypto Transaction Tooling" />
    </Head>
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
