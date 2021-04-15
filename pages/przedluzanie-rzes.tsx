import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const EyelashExtensionsPageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
`;

const StyledHeader = styled.h4`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  margin: 0.3rem;
  text-transform: uppercase;
`;

const StyledSectionHeader = styled.p`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  margin: 0.3rem;
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

const StyledLink = styled.a`
  width: 300px;
  text-align: center;
  margin: 5px 0;
  position: relative;
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

const StyledLinkContainer = styled.div`
  margin: auto;
  max-width: 600px;
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function PrzedluzanieRzes() {
  return (
    <EyelashExtensionsPageContainer>
      <Image src="/przedluzanie-rzes.png" width="1000" height="700" />
      <StyledArticle>
        <StyledHeader>Przedłużanie rzęs</StyledHeader>
        <StyledSectionHeader>Metoda 1:1</StyledSectionHeader>
        <StyledSection>
          Od tej metody wszystko się zaczęło. Jest to podstawowy sposób przedłużania rzęs. Polega on
          na doklejaniu do jednej rzęsy naturalnej, jedną rzęsę syntetyczną. Efekt końcowy
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
          syntetycznych można wpływać na to czy aplikacja będzie delikatna i subtelna czy wyrazista
          oraz bardziej zjawiskowa.
        </StyledSection>
        <StyledSection>
          Aplikacje objętościowe coraz bardziej wypierają metodę 1:1 z powodu wolniej pojawiających
          się ubytków w aplikacji. Dlaczego? Jedna gruba rzęsa wypadając pozostawia po sobie lukę,
          której nic nie zasłania. Natomiast w metodach od 2D wzwyż kępki nakładają się na siebie
          więc przy lekkich ubytkach aplikacja nadal wygląda na pełną. W wyniku tego, dużo dłużej
          można cieszyć się aplikacjami objętościowymi.{' '}
        </StyledSection>
        <StyledSectionHeader>Metoda 4D-6D i Mega Volume</StyledSectionHeader>
        <StyledSection>
          Tu już wkraczamy w świat tzw. mocnych objętości. Efekt końcowy jest bardziej
          spektakularny, niż w poprzednich lżejszych metodach. Kępki tworzy się z powyżej czterech
          rzęs syntetycznych. Im więcej rzęs w kępce, tym cieńsze powinny one być. Dąży się do tego,
          aby jak najmniej obciążać rzęsę. Jednak należy pamiętać o tym, że przy dłuższym noszeniu
          mocniejszych aplikacji, rzęsy naturalne mogą się osłabić.{' '}
        </StyledSection>
        <StyledLogoContainer>
          <Image src="/mark.png" width="48" height="84" />
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
    </EyelashExtensionsPageContainer>
  );
}

export default PrzedluzanieRzes;
