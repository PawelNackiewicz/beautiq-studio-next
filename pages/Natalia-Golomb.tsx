import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const AboutMePageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  padding: 1rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledArticle = styled.article`
  max-width: 500px;
  margin: auto;
  font-size: 16px;
  padding: 0.5rem;
`;

const StyledSection = styled.section`
  line-height: 160%;
  margin-bottom: 1rem;
`;

function NataliaGolomb() {
  return (
    <AboutMePageContainer>
       <NextSeo
        title="Stylistka brwi i rzęs w Ozimku" description="Najlepsza stylistka rzęs i brwi w Ozimku koło Opola"
      />
      <Image alt="Natalia Golomb" src="/Natalia_Golomb.jpg" width="530" height="800" />
      <StyledArticle>
        <StyledSection>
          Cześć! Nazywam się Natalia Golomb i jestem właścicielką BEAUTIQ Studio w Ozimku. To co
          sprawia mi największą satysfakcję na codzień - są uśmiechy moich klientek - kiedy patrzą na
          siebie i widzą efekty mojej pracy. Co może być większą nagrodą za moją pracę? :-) Jestem
          kosmetologiem, stylistką rzęs i brwi, instruktorem oraz linergistką.
        </StyledSection>
        <StyledSection>
          Ukończyłam Wyższą Szkołę Fizjoterapii we Wrocławiu z tytułem kosmetologa. Zdobywając
          odpowiednie umiejętności aby z pełną świadomością i starannością dbać o skóry moich
          klientek. W mojej ofercie znajdziesz zabiegi dla każdego typu skóry.
        </StyledSection>
        <StyledSection>
          Tak naprawdę to stylizacja rzęs pokazała mi, że studia kosmetologiczne to moja droga.
          Stylizacją oprawy oka zajmuję się od 2015 roku. Zabieg przedłużania rzęs nie ma przede mną
          tajemnic - to sprawiło, że zostałam wyłącznym instruktorem Rarity Academy w województwie
          opolskim.
        </StyledSection>
        <StyledSection>
          Jako instruktor prowadzę szkolenia z wszystkich metod stylizacji rzęs. Jestem również
          linergistką. Co to znaczy? Zajmuję się makijażem permanentnym brwi. PMU to już wisienka na
          torcie moich usług.
        </StyledSection>
        <StyledSection>
          Dlaczego tak bardzo pokochałam oprawę oka? Potrafi ona odmienić nasze spojrzenia,
          podkreślić urodę i naprawdę - poczuć się pewniejsza siebie.
        </StyledSection>
      </StyledArticle>
    </AboutMePageContainer>
  );
}

export default NataliaGolomb;
