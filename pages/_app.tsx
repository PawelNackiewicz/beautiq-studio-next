import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar/Navbar'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
    
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
   background-color: #F2EADF;
   font-family: Ubuntu,serif;
   font-style: normal;
   font-weight: normal;
   margin: 0;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
