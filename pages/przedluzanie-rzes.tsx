import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const EyelashExtensionsPageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`

const StyledHeader = styled.h4`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  margin: .3rem;
`

const StyledSectionHeader = styled.h5`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  margin: .3rem;
`

const StyledArticle = styled.article`
  max-width: 600px;
  margin: auto;
  font-size: 19px;
  padding: 1rem;
`

const StyledSection = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
`

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const StyledImageOfferLabel = styled.div`
  margin: 1rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 210px;
  height: 42px;
  background: rgba(64, 44, 33, 0.85);
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: .9;
  z-index: 1;
`

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

function PrzedluzanieRzes() {
  return (
    <EyelashExtensionsPageContainer>
      //img
    <StyledArticle>
      <StyledHeader>Przedłużanie rzęs</StyledHeader>
      <StyledSectionHeader>Metoda 1:1</StyledSectionHeader>
      <StyledSection>Od tej metody wszystko się zaczęło. Jest to podstawowy sposób przedłużania rzęs. Polega on na
        doklejaniu do jednej rzęsy naturalnej, jedną rzęsę syntetyczną. Efekt końcowy zagęszczenia jest różny, w
        zależności od ilości rzęs naturalnych klientki.
      </StyledSection>
      <StyledSectionHeader>Metoda 2-3D</StyledSectionHeader>
      <StyledSection>Jest to najczęściej wybierana metoda przez moje klientki. Pasuje ona bowiem do każdego typu
        urody, wieku i oprawy oka. Ceniona jest głównie za uniwersalność oraz delikatn, a zarazem wystarczająco
        widoczny, efekt.</StyledSection>
      <StyledSection>Polega ona na stworzeniu przez stylistkę kępki z dwóch lub trzech cienkich syntetycznych rzęs i
        przeklejeniu jej do rzęsy naturalnej. W zależności od grubości użytych rzęs syntetycznych można wpływać na
        to
        czy aplikacja będzie delikatna i subtelna czy wyrazista oraz bardziej zjawiskowa.</StyledSection>
      <StyledSection>Aplikacje objętościowe coraz bardziej wypierają metodę 1:1 z powodu wolniej pojawiających się
        ubytków w aplikacji. Dlaczego? Jedna gruba rzęsa wypadając pozostawia po sobie lukę, której nic nie
        zasłania.
        Natomiast w metodach od 2D wzwyż kępki nakładają się na siebie więc przy lekkich ubytkach aplikacja nadal
        wygląda na pełną. W wyniku tego, dużo dłużej można cieszyć się aplikacjami objętościowymi. </StyledSection>
      <StyledSectionHeader>Metoda 4D-6D i Mega Volume</StyledSectionHeader>
      <StyledSection>Tu już wkraczamy w świat tzw. mocnych objętości. Efekt końcowy jest bardziej spektakularny, niż
        w
        poprzednich lżejszych metodach. Kępki tworzy się z powyżej czterech rzęs syntetycznych. Im więcej rzęs w
        kępce, tym cieńsze powinny one być. Dąży się do tego, aby jak najmniej obciążać rzęsę. Jednak należy
        pamiętać
        o tym, że przy dłuższym noszeniu mocniejszych aplikacji, rzęsy naturalne mogą się osłabić. </StyledSection>
      <StyledLogoContainer>
       <Image src="/mark.png" width="48" height="84" />
      </StyledLogoContainer>
      <StyledSection>Najlepszym wyborem jest konsultacja z wykwalifikowaną stylistką, która odpowiednio dobierze
        metodę do stanu naturalnych rzęs klientki oraz do oczekiwanego efektu.</StyledSection>
      <StyledSection>
        Zapraszam serdecznie na taką konsultację.</StyledSection>
    </StyledArticle>
    <StyledLink href="/lifting-rzes" passHref>
      <StyledImageOfferLabel>
        Lifting rzęs
      </StyledImageOfferLabel>
    </StyledLink>
    <StyledLink href="/stylizacja-brwi" passHref>
      <StyledImageOfferLabel>
        Stylizacja brwi
      </StyledImageOfferLabel>
    </StyledLink>
    <StyledLink href="/jak-dbac-o-rzesy" passHref>
      <StyledImageOfferLabel>
        Jak dbać o rzęsy
      </StyledImageOfferLabel>
    </StyledLink>
  </EyelashExtensionsPageContainer>
  );
}

export default PrzedluzanieRzes;
