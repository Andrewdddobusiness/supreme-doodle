import "@/styles/globals.css";
import Layout from "../components/layout";

import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
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
