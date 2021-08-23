import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

import {
  StyledArticle,
  StyledHeader,
  StyledLink,
  StyledLinkContainer,
  StyledLogoContainer,
  StyledSection,
  StyledStep,
  StyledSectionHeader,
  PageContainer,
} from '../styles/index';

function LiftingRzes() {
  return (
    <Layout title="Lifting rzęs">
      <PageContainer>
        <NextSeo title="Lifting rzęs - Ozimek, okolice Opola" description="laminacja rzęs" />
        <Image src="/images/lashPages/lifting-rzes.jpg" width="1000" height="700" alt="lifting rzęs" quality={100}/>
        <StyledArticle>
          <StyledHeader>Lifting rzęs</StyledHeader>
          <StyledSectionHeader>Dla kogo?</StyledSectionHeader>
          <StyledSection>
            Dla osób, które cenią sobie naturalność i wygodę oraz nie chcą się ograniczać. Dla osób
            które posiadają proste, grube i oporne rzęsy. Dla osób, które nie lubią, nie chcą bądź
            nie mogą, z różnych przyczyn, nosić rzęs przedłużonych.
          </StyledSection>
          <StyledSection>
            Ten niesamowity zabieg wykonuję na najlepszych produktach dostępnych na rynku. Mowa tu o
            włoskiej firmie InLei. Produkty tej firmy wyróżniają się całkowitym bezpieczeństwem oraz
            skutecznością. Każdy preparat przeszedł szereg badań aby mógł dostać się do sprzedaży i
            do pracy przy gałce ocznej oraz skórze.
          </StyledSection>
          <StyledSection>
            Szkolenie z tego zabiegu, przeszłam u Sashy Krytsyny – instruktorki oraz polskiej twarzy
            firmy InLei, która wprowadziła tą firmę na polski rynek.
          </StyledSection>
          <StyledStep>Krok 1</StyledStep>
          <StyledSection>
            Podkręcanie rzęs naturalnych rozpoczynam doborem wałeczków silikonowych (indywidualnie
            dla każdej klientki) dla uzyskania odpowiedniego podkręcania. Po nawinięciu rzęs na
            wałek, kolejno nakładam odpowiednie preparaty. Delikatne działanie produktów sprawia, że
            rzęsy stają się trwale podkręcone oraz uniesione. Uzyskujemy tym optycznie otwarte oko –
            efekt zalotki, tylko na dłużej!
          </StyledSection>
          <StyledStep>Krok 2</StyledStep>
          <StyledSection>
            Koloryzacja. Rzęsa naturalna jest zwykle jaśniejsza na końcach niż u nasady dlatego
            trwała koloryzacja jest nieodłącznym elementem liftingu. Farbka InLei działa na rzęsę
            inaczej niż "zwykła henna rzęs". Jest to innowacyjny produkt działający na zasadzie
            dekoloryzacji-koloryzacji. Tylko takie działanie gwarantuje utrzymanie koloru tak długo,
            ile trwa naturalny cykl życia rzęsy, czyli aż rzęsa po prostu sama nie wypadnie – mniej
            więcej półtora miesiąca. I jeszcze ten przyjemny zapach!
          </StyledSection>
          <StyledStep>Krok 3</StyledStep>
          <StyledSection>
            Lash Filler, czyli regeracja, odżywienie i pogrubienie struktury rzęsy. Jest to końcowy
            preparat tego zabiegu. Zawiera między innymi pantenol, hydrolizowaną keratynę i peptydy.
            Lash Filler został przekazany i poddany wielu testom. To co nas najbardziej interesuje,
            to jego działanie pogrubiające rzęsę naturalną, bo jest to jedyny taki produkt na rynku!
            Udowodniono, że już po maksymalnie 3 zabiegach następuje pogrubienie rzęs naturalnych o
            24%!
          </StyledSection>
        </StyledArticle>
        <StyledLogoContainer>
          <Image src="/brand/mark.png" width="48" height="84" />
        </StyledLogoContainer>
        <StyledLinkContainer>
          <Link href="/przedluzanie-rzes" passHref>
            <StyledLink>Przedłużanie rzęs</StyledLink>
          </Link>
          <Link href="/jak-dbac-o-rzesy" passHref>
            <StyledLink>Jak dbać o rzęsy</StyledLink>
          </Link>
        </StyledLinkContainer>
      </PageContainer>
    </Layout>
  );
}

export default LiftingRzes;
