import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { questions } from '../content/faq';

import {
  PageContainer,
  StyledArticle,
  StyledLogoContainer,
  StyledSectionHeader,
  StyledSection,
  StyledHeader,
  StyledImageWrapper,
} from '../styles/index';
import { Accordion } from '../components/Accordion/Accordion';

const StyledList = styled.ul``;
const StyledListElement = styled.li``;

function MakijazPermanentny() {
  return (
    <Layout title="Makijaż permanentny">
      <PageContainer>
        <NextSeo
          title="Makijaż permanentny - Ozimek, okolice Opola"
          description="makijaż permanentny brwi"
        />
        <StyledImageWrapper>
          <Image
            src="/images/makijazPermanentny/makijaz-permanentny.jpeg"
            width="800"
            height="600"
            alt="Makijaż permanentny"
            quality={100}
          />
        </StyledImageWrapper>
        <StyledArticle>
          <StyledHeader>Makijaż permanentny brwi</StyledHeader>
          <StyledSectionHeader>Czym jest makijaż permanentny brwi?</StyledSectionHeader>
          <StyledSection>
            Jest to sposób na uzyskanie trwałego efektu makijażu brwi bez codziennego jego
            wykonywania. Za pomocą różnych technik mikropigmentacji możemy uzyskać efekt pięknych,
            naturalnych brwi. Do zabiegu używa się sterylnych igieł oraz pigmentów medycznych w celu
            zapewnienia maksymalnego bezpieczeństwa.
          </StyledSection>
          <StyledSection>
            Kim jest linergista? Jest to osoba przeszkolona do wykonywania zabiegów z użyciem
            mikropigmentacji. Podczas zabiegu, linergistka bardzo dużą uwagę zwraca na perfekcyjny
            rysunek wstępny brwi. Kolor pigmentu oraz kształt jest konsultowany zawsze z klientką.
          </StyledSection>
          <StyledSectionHeader>Jakie są wskazania do makijażu permanentnego?</StyledSectionHeader>
          <StyledList>
            <StyledListElement>Trudność w samodzielnym wykonywaniu makijażu brwi</StyledListElement>
            <StyledListElement>Brak włosków lub niewielka ilość</StyledListElement>
            <StyledListElement>Chęć zyskania więcej czasu rankiem</StyledListElement>
            <StyledListElement>
              Gdy stylizacja brwi henną utrzymuje się zbyt krótko
            </StyledListElement>
            <StyledListElement>Po chemioterapii (za zgodą lekarza)</StyledListElement>
            <StyledListElement>Uczulenie na hennę lub farbkę</StyledListElement>
            <StyledListElement>
              Częste chodzenie na basen, siłownię czy inny sport - ten rodzaj makijażu nie zetrze
              się na pewno!
            </StyledListElement>
          </StyledList>
          <StyledSectionHeader>Najczęściej zadawane pytania.</StyledSectionHeader>
          {questions.map((item) => (
            <Accordion key={item.id} question={item.header} answer={item.body} />
          ))}
        </StyledArticle>
        <StyledLogoContainer>
          <Image src="/brand/mark.png" width="48" height="84" />
        </StyledLogoContainer>
      </PageContainer>
    </Layout>
  );
}

export default MakijazPermanentny;
