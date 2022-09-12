import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Theme from "../styles/ThemeProvider";
import { PageGrid } from "../styles/pages/shared";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Header />
      <PageGrid>
        <Component {...pageProps} />
      </PageGrid>
      <Footer />
    </Theme>
  );
}

export default MyApp;
