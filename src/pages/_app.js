import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import NProgress from "nprogress";
import { appWithTranslation } from "next-i18next";



if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
    return () => {
      NProgress.done();
    };
  }, []);


  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}



export default appWithTranslation(MyApp);
