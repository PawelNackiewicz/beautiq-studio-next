import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { DefaultSeo } from 'next-seo';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pl_PL',
          url: 'http://beautiqstudio.pl/',
          site_name: 'BeautiQ Studio',
        }}
      />
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
