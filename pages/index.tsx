import Head from 'next/head';
import styled from 'styled-components';
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

const OffersContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
    
  @media(min-width: 1050px){
  grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

const StyledLink = styled.a`
    position: relative;
    top: 20px;
    padding: 15px 30px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgb(0, 0, 0);
    letter-spacing: 2px;
    font-size: 20px;
    cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c4a747;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }

  &:hover:before {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:transparent;
    border: 2px solid #c4a747;
    box-sizing: border-box;
    
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }

  &:hover:after {
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }
`

const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <OffersContainer>
          <OfferWrapper>
            <Image src="/brwi.png" width="320" height="120" />
              <Link href="/stylizacja-brwi" passHref>
                <StyledLink>
                    Stylizacja brwi
                </StyledLink>
              </Link>
          </OfferWrapper>
          <OfferWrapper>
            <Image src="/lifting.png" width="320" height="120" />
            <Link href="/lifting-rzes">
                <StyledLink>Lifting rzęs</StyledLink>
            </Link>
          </OfferWrapper>
          <OfferWrapper>
            <Image src="/przedluzanie_rzes.png" width="320" height="120" />
            <Link href="/przedluzanie-rzes">
              <StyledLink>
                Przedłużanie rzęs
              </StyledLink>
            </Link>
          </OfferWrapper>
        </OffersContainer>
        <FindMe />
      </MainContainer>
      </main>

    </div>
  );
}
