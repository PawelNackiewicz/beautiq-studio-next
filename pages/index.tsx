import styled from 'styled-components';
import Image from 'next/image';
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

export async function getStaticProps() {
  const images = fs.readdirSync(path.join(process.cwd(),'public/images/Instagram'));
  
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
            title="BeautiQ Studio - Natalia Golomb"
            description="Stylistka rzęs i brwi w Ozimku. Szkolenia z przedłużania rzęs - RarityAcademy - Opole. Makijaż permamentny - Ozimek, okolice Opola"
          />
          <HeaderFotoContainer>
            <Image
              src="/images/homePage/background_clean.png"
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
              href="https://www.instagram.com/natalia.golomb/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Image
                src="/icons/instagram.png"
                alt="https://www.instagram.com/natalia.golomb/"
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
          <AboutMe />
          <Coaching />
          <ImageSlider images={images} />
          <FindMe />
        </MainContainer>
      </main>
    </Layout>
  );
}
