import Head from 'next/head';
import styled from "styled-components"
import Image from 'next/image';
import Link from 'next/link';
import FindMe from '../components/FindMe';

const MainContainer = styled.main`
  max-width: 1000px;
  margin: auto;
`

const HeaderFotoContainer = styled.div`
  max-width: 100%;
`

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 10px;
  
  @media(min-width: 600px) {
    position: relative;
    top: -75px;
    justify-content: center;
    margin: 0;
      
    a {
      margin: 0 2rem;
    }
  }
  
  a {
    opacity: .5;
    transition: all 200ms ease-in;
  }
  
  a:hover {
    opacity: 1;
  }
  
  a:after {
    transition: all 0.4s ease-in;
  }
`

const OfferImageContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
    
  @media(min-width: 1050px){
  grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

const StyledOfferImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 320px;
  z-index: -1;
  position: relative;
  margin: 1rem auto;
`

const StyledImageOfferLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 210px;
  height: 42px;
  background: rgba(64, 44, 33, 0.85);
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: .9;
  z-index: 1;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>BeautiQ Studio</title>
        <link rel="icon" href="/mark.png" />
      </Head>

      <main>
      <MainContainer>
        <HeaderFotoContainer>
          <Image src="/background.png" width="1000" height="380" />
        </HeaderFotoContainer>
        <SocialMediaContainer>
          <a href="https://www.facebook.com/beautiq.studio.ozimek/" target="_blank" rel="noreferrer">  <Image src="/icons/facebook.png" alt="facebook" width="30" height="30" /></a>
          <a href="https://www.instagram.com/beautiq_studio_natalia_golomb/?hl=pl" target="_blank" rel="noreferrer">  <Image src="/icons/instagram.png" alt="instagram" width="30" height="30" /></a>
          <a href="https://www.linkedin.com/in/natalia-golomb/" target="_blank" rel="noreferrer">  <Image src="/icons/linkedin.png" alt="linkedin" width="30" height="30" /></a>
        </SocialMediaContainer>
        <OfferImageContainer>
          <Link href="/stylizacja-brwi">
            <StyledOfferImage>
              <StyledImageOfferLabel>
                Stylizacja brwi</StyledImageOfferLabel>
                <Image src="/eyelashExtensions.png" width="320" height="120" />
            </StyledOfferImage>
          </Link>
          <Link href="/lifting-rzes">
            <StyledOfferImage>
              <StyledImageOfferLabel>Lifting rzęs</StyledImageOfferLabel>
              <Image src="/lifting.png" width="320" height="120" />
            </StyledOfferImage>
          </Link>
          <Link href="/przedluzanie-rzes">
            <StyledOfferImage>
              <StyledImageOfferLabel>Przedłużanie rzęs</StyledImageOfferLabel>
              <Image src="/eyebrow.png" width="320" height="120" />
            </StyledOfferImage>
          </Link>
        </OfferImageContainer>
        <FindMe />
      </MainContainer>
      </main>

    </div>
  );
}
