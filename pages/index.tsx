import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import FindMe from '../components/FindMe';
import AboutMe from '../components/AboutMe';
import Coaching from '../components/Coaching';
import { ImageSlider } from '../components/Slider/ImageSlider';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import fs from 'fs'
import path from 'path';

const MainContainer = styled.main`
  max-width: 1200px;
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
  grid-template-rows: repeat(4, 1fr);

  @media (min-width: 800px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`;

const StyledLink = styled.a`
  position: relative;
  top: 20px;
  height: 60px;
  width: 200px;
  padding: 10px 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(0, 0, 0);
  letter-spacing: 2px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

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
  height: 210px;
`;

export async function getStaticProps() {
  const images = fs.readdirSync(path.join(process.cwd(),'public/instagram'));
  
  return {
    props: {
      images,
    },
  };
}

export default function Home({ images }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <main>
        <MainContainer>
          <NextSeo
            title="Strona główna"
            description="Stylistka rzęs i brwi w Ozimku. Szkolenia z przedłużania rzęs - RarityAcademy. Makijaż permamentny - Ozimek, okolice Opola"
          />
          <HeaderFotoContainer>
            <Image
              src="/background_clean.png"
              alt="beautiq studio - Ozimek, okolice Opola"
              width="1200"
              height="183"
            />
          </HeaderFotoContainer>
          <SocialMediaContainer>
            <a
              href="https://www.facebook.com/beautiq.studio.ozimek/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Image
                src="/icons/facebook.png"
                alt="facebook.com/beautiq.studio.ozimek"
                width="30"
                height="30"
              />
            </a>
            <a
              href="https://www.instagram.com/beautiq_studio_natalia_golomb/?hl=pl"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Image
                src="/icons/instagram.png"
                alt="https://www.instagram.com/beautiq_studio_natalia_golomb"
                width="30"
                height="30"
              />
            </a>
            <a href="https://www.linkedin.com/in/natalia-golomb/" target="_blank" rel="noreferrer">
              {' '}
              <Image
                src="/icons/linkedin.png"
                alt="linkedin.com/in/natalia-golomb"
                width="30"
                height="30"
              />
            </a>
          </SocialMediaContainer>
          {/* <OffersContainer>
            <OfferWrapper>
              <Image src="/homePage/brwi.png" width="280" height="120" />
              <Link href="/stylizacja-brwi" passHref>
                <StyledLink>Stylizacja brwi</StyledLink>
              </Link>
            </OfferWrapper>
            <OfferWrapper>
              <Image src="/homePage/lifting.png" width="280" height="120" />
              <Link href="/kosmetologia" passHref>
                <StyledLink>Kosmetologia</StyledLink>
              </Link>
            </OfferWrapper>
            <OfferWrapper>
              <Image src="/homePage/przedluzanie_rzes.png" width="280" height="120" />
              <Link href="/przedluzanie-rzes" passHref>
                <StyledLink>Przedłużanie rzęs</StyledLink>
              </Link>
            </OfferWrapper>
            <OfferWrapper>
              <Image src="/homePage/przedluzanie_rzes.png" width="280" height="120" />
              <Link href="/makijaz-permanentny" passHref>
                <StyledLink>Makijaż permanentny</StyledLink>
              </Link>
            </OfferWrapper>
          </OffersContainer> */}
          <AboutMe />
          <Coaching />
          <ImageSlider images={images} />
          <FindMe />
        </MainContainer>
      </main>
    </Layout>
  );
}
