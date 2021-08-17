import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

const LiftingPageContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 1rem 0;
`;

const StyledHeader = styled.h1`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;
  margin: 0.3rem;
  text-transform: uppercase;
`;

const StyledArticle = styled.article`
  max-width: 600px;
  margin: auto;
  font-size: 19px;
  padding: 1rem;
`;

const StyledSection = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledDescriptionHeader = styled.h6`
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
`;

const StyledList = styled.ul``;
const StyledListElement = styled.li``;

function MakijazPermanentny() {
  return (
    <Layout title="Makijaż permanentny">
      <LiftingPageContainer>
        <NextSeo
          title="Makijaż permanentny - Ozimek, okolice Opola"
          description="makijaż permanentny brwi"
        />
        <Image
          src="/images/makijazPermanentny/makijaz-permanentny.jpeg"
          width="800"
          height="600"
          alt="Makijaż permanentny"
          quality={100}
        />
        <StyledArticle>
          <StyledHeader>Makijaż permanentny brwi</StyledHeader>
          <StyledDescriptionHeader>Czym jest makijaż permanentny brwi?</StyledDescriptionHeader>
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
          <StyledDescriptionHeader>
            Jakie są wskazania do makijażu permanentnego?
          </StyledDescriptionHeader>
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
        </StyledArticle>
        <StyledLogoContainer>
          <Image src="/brand/mark.png" width="48" height="84" />
        </StyledLogoContainer>
      </LiftingPageContainer>
    </Layout>
  );
}

export default MakijazPermanentny;
