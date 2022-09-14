import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Theme from "../styles/ThemeProvider";
import { PageGrid } from "../styles/pages/shared";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <Header />
        <PageGrid>
          <Component {...pageProps} />
        </PageGrid>
        <Footer />
      </Theme>
    </Provider>
  );
}

export default MyApp;
