import Head from "next/head";
import Header from "./header";

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
    {/* <Footer /> */}
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </>
);

export default Layout;
