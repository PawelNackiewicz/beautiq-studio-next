import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

import {
  StyledArticle,
  StyledHeader,
  PageContainer,
  StyledLogoContainer,
  StyledLink,
  StyledSectionHeader,
  StyledLinkContainer,
  StyledSection,
} from '../styles/index';

function PrzedluzanieRzes() {
  return (
    <Layout title="Przedłużanie rzęs">
      <PageContainer>
        <NextSeo title="Przedłużanie rzęs - Ozimek" description="stylizacja rzęs - ozimek" />
        <Image src="/images/lashPages/przedluzanie-rzes.jpg" width="1000" height="700" alt="przedłużanie rzęs" quality={100}/>
        <StyledArticle>
          <StyledHeader>Przedłużanie rzęs</StyledHeader>
          <StyledSectionHeader>Metoda 1:1</StyledSectionHeader>
          <StyledSection>
            Od tej metody wszystko się zaczęło. Jest to podstawowy sposób przedłużania rzęs. Polega
            on na doklejaniu do jednej rzęsy naturalnej, jedną rzęsę syntetyczną. Efekt końcowy
            zagęszczenia jest różny, w zależności od ilości rzęs naturalnych klientki.
          </StyledSection>
          <StyledSectionHeader>Metoda 2-3D</StyledSectionHeader>
          <StyledSection>
            Jest to najczęściej wybierana metoda przez moje klientki. Pasuje ona bowiem do każdego
            typu urody, wieku i oprawy oka. Ceniona jest głównie za uniwersalność oraz delikatn, a
            zarazem wystarczająco widoczny, efekt.
          </StyledSection>
          <StyledSection>
            Polega ona na stworzeniu przez stylistkę kępki z dwóch lub trzech cienkich syntetycznych
            rzęs i przeklejeniu jej do rzęsy naturalnej. W zależności od grubości użytych rzęs
            syntetycznych można wpływać na to czy aplikacja będzie delikatna i subtelna czy
            wyrazista oraz bardziej zjawiskowa.
          </StyledSection>
          <StyledSection>
            Aplikacje objętościowe coraz bardziej wypierają metodę 1:1 z powodu wolniej
            pojawiających się ubytków w aplikacji. Dlaczego? Jedna gruba rzęsa wypadając pozostawia
            po sobie lukę, której nic nie zasłania. Natomiast w metodach od 2D wzwyż kępki nakładają
            się na siebie więc przy lekkich ubytkach aplikacja nadal wygląda na pełną. W wyniku
            tego, dużo dłużej można cieszyć się aplikacjami objętościowymi.{' '}
          </StyledSection>
          <StyledSectionHeader>Metoda 4D-6D i Mega Volume</StyledSectionHeader>
          <StyledSection>
            Tu już wkraczamy w świat tzw. mocnych objętości. Efekt końcowy jest bardziej
            spektakularny, niż w poprzednich lżejszych metodach. Kępki tworzy się z powyżej czterech
            rzęs syntetycznych. Im więcej rzęs w kępce, tym cieńsze powinny one być. Dąży się do
            tego, aby jak najmniej obciążać rzęsę. Jednak należy pamiętać o tym, że przy dłuższym
            noszeniu mocniejszych aplikacji, rzęsy naturalne mogą się osłabić.{' '}
          </StyledSection>
          <StyledLogoContainer>
            <Image src="/brand/mark.png" width="48" height="84" />
          </StyledLogoContainer>
          <StyledSection>
            Najlepszym wyborem jest konsultacja z wykwalifikowaną stylistką, która odpowiednio
            dobierze metodę do stanu naturalnych rzęs klientki oraz do oczekiwanego efektu.
          </StyledSection>
          <StyledSection>Zapraszam serdecznie na taką konsultację.</StyledSection>
        </StyledArticle>
        <StyledLinkContainer>
          <Link href="/lifting-rzes" passHref>
            <StyledLink>Lifting rzęs</StyledLink>
          </Link>
          <Link href="/jak-dbac-o-rzesy" passHref>
            <StyledLink>Jak dbać o rzęsy</StyledLink>
          </Link>
        </StyledLinkContainer>
      </PageContainer>
    </Layout>
  );
}

export default PrzedluzanieRzes;
