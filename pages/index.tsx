import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import FindMe from '../components/FindMe';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MainContainer = styled.main`
  max-width: 1000px;
  margin: auto;
`;

const HeaderFotoContainer = styled.div`
  max-width: 100%;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 10px;

  @media (min-width: 600px) {
    position: relative;
    top: -75px;
    justify-content: center;
    margin: 0;

    a {
      margin: 0 2rem;
    }
  }

  a {
    opacity: 0.5;
    transition: all 200ms ease-in;
  }

  a:hover {
    opacity: 1;
  }

  a:after {
    transition: all 0.4s ease-in;
  }
`;

const OffersContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  @media (min-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

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
    background: transparent;
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
`;

const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InstagramWrapper = styled.div`
  margin-top: 40px;
  background-color: #f7a1f2;
  height: 200px;
`;

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
            <a
              href="https://www.facebook.com/beautiq.studio.ozimek/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Image src="/icons/facebook.png" alt="facebook" width="30" height="30" />
            </a>
            <a
              href="https://www.instagram.com/beautiq_studio_natalia_golomb/?hl=pl"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Image src="/icons/instagram.png" alt="instagram" width="30" height="30" />
            </a>
            <a href="https://www.linkedin.com/in/natalia-golomb/" target="_blank" rel="noreferrer">
              {' '}
              <Image src="/icons/linkedin.png" alt="linkedin" width="30" height="30" />
            </a>
          </SocialMediaContainer>
          <OffersContainer>
            <OfferWrapper>
              <Image src="/brwi.png" width="320" height="120" />
              <Link href="/stylizacja-brwi" passHref>
                <StyledLink>Stylizacja brwi</StyledLink>
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
                <StyledLink>Przedłużanie rzęs</StyledLink>
              </Link>
            </OfferWrapper>
          </OffersContainer>
          <InstagramWrapper>
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={5} visibleSlides={3}>
              <Slider>
                <Slide index={0}>
                  <Image
                    src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12"
                    width="200"
                    height="200"
                  />
                </Slide>
                <Slide index={1}>
                  <Image
                    src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12"
                    width="200"
                    height="200"
                  />
                </Slide>
                <Slide index={2}>
                  <Image
                    src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/140522855_166874968558711_320024573641518822_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8ae9d6&_nc_ohc=x9PzELLvdRcAX_cekCk&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=2db79d42d13fb19a418a98df4c525d17&oe=60671CBF"
                    width="200"
                    height="200"
                  />
                </Slide>
                <Slide index={3}>
                  <Image
                    src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12"
                    width="200"
                    height="200"
                  />
                </Slide>
                <Slide index={4}>
                  <Image
                    src="https://scontent-frt3-2.cdninstagram.com/v/t51.29350-15/152862704_422522055677894_2307790436837529638_n.jpg?_nc_cat=103&ccb=3&_nc_sid=8ae9d6&_nc_ohc=iqA5-f5Q4W0AX9amXiD&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=03369fd5bd12f6c70a76e73e4762f999&oe=60680946"
                    width="200"
                    height="200"
                  />
                </Slide>
              </Slider>
            </CarouselProvider>
            {/* <img src='https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12'/>
            <img src='https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12'/>
            <img src='https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141178628_265134118302288_3039269350794455955_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=vYggcMtF9m0AX8QL8xC&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=b05777bf8c045164cff0fe108022e2af&oe=60671C12'/> */}
            {/* <Image src="/mark.png" width="48" height="84" alt='1'/>
            <Image src="/mark.png" width="48" height="84" alt='2'/>
            <Image src="/mark.png" width="48" height="84" alt='3'/> */}
          </InstagramWrapper>
          <FindMe />
        </MainContainer>
      </main>
    </div>
  );
}
