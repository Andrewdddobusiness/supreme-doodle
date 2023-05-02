import "@/styles/globals.css";
import Layout from "../components/layout";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    fetch("/api/getHistoricalTransactionsByWallet")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // do something with the data here
      })
      .catch((error) => {
        console.error(error); // handle any errors here
      });
  }, []);

  return (
    <main className={roboto.className}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}
