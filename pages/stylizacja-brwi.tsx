import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

import {
  StyledArticle,
  StyledHeader,
  StyledDescriptionHeader,
  StyledLogoContainer,
  StyledSection,
} from '../styles/index';

const EyebrowPageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledStep = styled.p`
  font-family: 'Courgette', cursive;
  text-align: center;
  font-size: 30px;
`;

function StylizacjaBrwi() {
  return (
    <Layout title="Stylizacja brwi">
      <EyebrowPageContainer>
        <NextSeo
          title="Stylizacja brwi - Ozimek, okolice Opola"
          description="stylizacja rzęs - ozimek"
        />
        <Image src="/images/browsPage/brwi.jpg" width="600" height="360" alt='stylizacja brwi' quality={100}/>
        <StyledArticle>
          <StyledHeader>Stylizacja brwi</StyledHeader>
          <StyledDescriptionHeader>Dla kogo?</StyledDescriptionHeader>
          <StyledSection>
            Dla każdego, kto nie jest zadowolony z kształtu, koloru czy kondycji swoich brwi.
          </StyledSection>
          <StyledSection>
            Jest to jeden z najbardziej pożądanych zabiegów ostatnich miesięcy. To nie jest
            tradycyjna henna! Dlaczego? Ponieważ trzyma dłużej niż tradycyjna henna, a kolory
            wychodzą piękne i naturalne. Najbardziej jednak świat pokochał BROW HENNĘ za naturalny
            skład oraz dobroczynny wpływ na skórę i włoski.
          </StyledSection>
          <StyledStep>Krok 1</StyledStep>
          <StyledSection>
            Wykonanie peelingu lub masażu jednorazową szczoteczką w celu złuszczenia martwych
            komórek naskórka, dzięki czemu uzyskamy jednolity kolor henny i lepszą trwałość.
          </StyledSection>
          <StyledStep>Krok 2</StyledStep>
          <StyledSection>
            Architektura, geometria to inaczej rysunek wstępny brwi dobrany indywidualnie do
            klientki wykonany specjalną kredką, zabarwioną nitką i za pomocą specjalnej linijki do
            tego przeznaczonej.
          </StyledSection>
          <StyledStep>Krok 3</StyledStep>
          <StyledSection>
            Cały idealnie wyrysowany kształt obrysowuje Brow Pastą. Ta biała pasta dla mnie jako
            stylistki służy do stworzenia idealnego kształtu, jednak to nie jest jej jedyna funkcja!
            Jest ona bowiem skarbnicą olejków m.in. olej lniany, masło shea, olej rycynowy. Po
            precyzyjnym nałożeniu Brow Pasty nadchodzi moment konsultacji z klientką i ewentualnych
            poprawek kształtu.
          </StyledSection>
          <StyledLogoContainer>
            <Image src="/brand/mark.png" width="48" height="84" />
          </StyledLogoContainer>
          <StyledSection>
            Henna naturalna EKKO BEAUTY firmy NIKK MOLE, na której pracuję, powstaje w najmniej
            przetworzony sposób z rośliny o nazwie Lawsonia bezbronna. Związki czynne w niej zawarte
            m.in. poprawiają ukrwienie i wzmacniają mieszki włosowe. Henna ta nie farbuje tylko
            włosków, ale również skórę.
          </StyledSection>
          <StyledSection>
            Do jej aktywacji wystarczy woda mineralna lub sól fizjologiczna zamiast wody utlenionej,
            która osłabia już zazwyczaj zniszczone brwi. Hennę zmywam olejkiem pobudzającym wzrost
            rzęs, również fimy NIKK MOLE.
          </StyledSection>
          <StyledSection>
            Cały sekret efektu tego zabiegu leży w sposobie nakładania henny, dzięki niemu możemy
            uzyskać efekt ombre. Jest on bardzo szeroko omawiany na szkolniach, w których
            uczestniczę.
          </StyledSection>
          <StyledSection>
            Regularnie wykonywana henna tego typu wzmacnia, zagęszcza i pobudza do wzrostu brwi
            słabe i rzadkie. Tak więc to nie jest tylko chwilowy efekt koloryzacji, ale też cudowny
            zabieg regeneracyjny.
          </StyledSection>
        </StyledArticle>
      </EyebrowPageContainer>
    </Layout>
  );
}

export default StylizacjaBrwi;
