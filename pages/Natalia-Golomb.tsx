import styled from 'styled-components';
import Image from 'next/image';
import Footer from '../components/Footer';

const AboutMePageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 500px;
  width: 500px;
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
      <Image alt="Natalia Golomb" src="/Natalia_Golomb.jpg" width="500" height="500" />
      <StyledArticle>
        <StyledSection>
          Nazywam się Natalia Golomb i od 2016 roku spełniam swoje zawodowe marzenia. To właśnie
          wtedy rozpoczęła się moja przygoda ze światem rzęs i brwi. Wszystko zaczęło się od mojej
          pierwszej wizyty u stylistki rzęs. Piękny gabinet, dobra kawa, kojąca muzyka… i magia
          niczym z filmu. Magia ta jednak różniła się tym, że czarodziejka – stylistka rzęs –
          zamiast różdżki używała pęsety. Od tej pory zaciekawiłam się w czym tkwi tajemnica
          rzęsowych czarów. Już prawie 3 lata uszczęśliwiam nowym, czarującym wyglądem moje Klientki
          z okolic Opola.
        </StyledSection>
        <StyledSection>
          Jestem pierwszą stylistka rzęs w Ozimku oraz specjalizuję się w architekturze brwi. Bardzo
          kocham swoją pracę i z fascynacją podchodzę do każdej Klientki. Jestem w stanie wczuć się
          w oczekiwania Klientki oraz dopasować odpowiednie metody do jej oczekiwań. Kobieca uroda
          to coś niezwykłego, a ja czerpię ogromną radość z podkreślenia kobiecego piękna.{' '}
        </StyledSection>
        <StyledSection>
          Ciągle doskonalę swoje umiejętności na specjalistycznych szkoleniach oraz aktualizuję
          swoją wiedzę na temat nowych trendów w dziedzinie stylizacji rzęs oraz brwi. Na co dzień
          studiuję kosmetologię na Wyższej Szkole Fizjoterapii we Wrocławiu, ponieważ chcę mieć
          kompletną wiedzę, jak wydobywać z kobiet to, co w nich najlepsze.{' '}
        </StyledSection>
      </StyledArticle>
    </AboutMePageContainer>
  );
}

export default NataliaGolomb;
