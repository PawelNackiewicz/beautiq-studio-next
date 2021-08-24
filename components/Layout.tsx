import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { DefaultSeo } from 'next-seo';
import { CookiesPopup } from './CookiesPopup';
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap');

  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
   background-color:#F2F2F2;
   font-family: 'Crimson Pro', serif;
   font-style: normal;
   font-weight: normal;
   margin: 0;
  }
`;

const meta = {
  title: 'BeautiQ Studio - Natalia Golomb',
  description:
    'Stylizacja rzęs i brwi w Ozimku koło Opola. Makijaż permamenty oraz szkolenia z przedłużania rzęs. Zabiegi na twarz i wiele więcej...',
};

export default function Layout({ children, title = 'BeautiQ Studio - Natalia Golomb' }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          locale: 'pl_PL',
          url: `https://beautiqstudio.pl/`,
          description: meta.description,
          site_name: meta.title,
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/mark.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <GlobalStyle />
      <Navbar />
      {children}
      <CookiesPopup />
      <Footer />
    </div>
  );
}
