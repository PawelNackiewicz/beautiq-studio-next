import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'images article'
    'links links';

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledHeader = styled.h5`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  margin: 0.2rem;
`;

const StyledArticle = styled.article`
  grid-area: article;
  max-width: 600px;
  margin: auto;
  font-size: 19px;
  padding: 1rem;
`;

const StyledSection = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledDescriptionHeader = styled.p`
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
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
  grid-area: links;
  margin: auto;
  max-width: 600px;
  height: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  grid-area: images;
  max-width: 600px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function JakDbacORzesy() {
  let isMobileView = true;
  if (typeof window !== 'undefined') {
    isMobileView = window.screen.width > 1000;
  }

  return (
    <PageContainer>
       <NextSeo
      title="Jak dbać o rzęsy"
      description="skuteczna pielęgnacja rzęs"
    />
      <ImageContainer>
        <Image src="/jak-dbac-o-rzesy.png" width="600" height="750" alt='jak dbać o rzęsy'/>
        {isMobileView && (
          <>
            <Image src="/jak-dbac-o-rzesy-2.png" width="600" height="750" alt='jak dbać o rzęsy'/>
            <Image src="/jak-dbac-o-rzesy-3.png" width="600" height="750" alt='jak pielęgnować rzęsy'/>
          </>
        )}
      </ImageContainer>
      <StyledArticle>
        <StyledHeader>Zasady pielęgnacji rzęs</StyledHeader>
        <StyledDescriptionHeader>Do 48 godzin po zabiegu</StyledDescriptionHeader>
        <StyledSection>
          <p>• Unikać pocierania rzęs</p>
          <p>
            {' '}
            • Unikać narażania rzęs na działanie wody, ciepła oraz pary wodnej (gorącego prysznica,
            sauny, solarium, basenu)
          </p>
          <p>• Nie stosować żadnych kosmetyków w okolicy oczu</p>
          <p> • Przeczesywać rzęsy rano i wieczorem specjalną szczoteczką</p>
          <p>
            {' '}
            • Unikać zabiegów chemicznych na twarz oraz zabiegów mogących podrażnić okolice oczu
          </p>
          <p>
            {' '}
            • Spać na plecach oraz nie dotykać rzęs, aby nie powyginały się w trakcie wiązania kleju
          </p>
        </StyledSection>
        <StyledDescriptionHeader>Po 48 godzinach po zabiegu</StyledDescriptionHeader>
        <StyledSection>
          <p>• Unikać nadmiernego pocierania rzęs</p>
          <p>
            • Unikać makijażu oczu a jeżeli jest to niemożliwe, unikać kosmetyków wodoodpornych a
            później wykonywać bardzo dokładny demakijaż. Po każdym myciu rzęs przeczesywać dokładnie
            rzęsy w sposób pokazany przez stylistkę.
          </p>
          <p>
            • Przy każdej wizycie w celu dopełnienia rzęs, dostanie Pani ode mnie nową szczoteczkę.
          </p>
          <p>
            • Zachować ostrożność przy codziennej higienie i demakijaży oczu- NIE używać włóknistych
            materiałów oraz substancji natłuszczających na bazie olejków
          </p>
          <p>
            • Unikać stosowania innych tłustych kosmetyków w okolicach oczu takich jak kremy,
            podkłady wazelina, mleczko kosmetyczne. <b>TŁUSZCZ ROZPUSZCZA WIĄZANIE KLEJU</b>
          </p>
          <p>
            • Ograniczyć wizyty w saunie i w solarium- zbyt częste nagłe temperatury mogą osłabić
            wiązanie kleju
          </p>
          <p>• Nie stosować zalotki- grozi to połamaniem rzęs</p>
          <p>• Ograniczyć spanie na brzuchu</p>
        </StyledSection>
        <StyledSection>
          Sztuczne rzęsy wykonane są z wysokiej jakości syntetycznego materiału idealnie imitującego
          naturalną rzęsę. Prawidłowa aplikacja sztucznych rzęs nie powoduje dyskomfortu. Właściwie
          dobrane rzęsy nie ciągną, nie czujemy ich ciężaru. Cykl życia rzęsy trwa około 3-4 tyg.
          Każdego dnia tracimy z jednego oka 2/3 rzęst w naturalnym cyklu a na jej miejscu wyrasta
          nowa, zdrowa rzęsa. Dlatego zalecam dopełnienie po 3/max 4 tyg. Ze względów higienicznych
          polecam zdejmowanie aplikacji, co 3-4 uzupełnienie. Dzięki temu możemy prowadzić
          diagnostykę życia naturalnej rzęsy, a także oczyścić brzegi powiek. Nie wolno samodzielnie
          usuwać lub wyrywać przedłużonych rzęs! Może to spowodować ich uszkodzenie i utrudnić
          regenerację. Rzęsy można usunąć tylko przy użyciu specjalnego preparatu przez przeszkoloną
          stylisktę. Stylistka nie ponosi odpowiedzialności za aplikację w przypadku nie stosowania
          się do powyższych zaleceń- reklamacje nie będą uwzględniane. Reklamację uwzględniam do
          tygodnia po zabiegu. Tylko w przypadku nietrwałej aplikacji.
        </StyledSection>
        <StyledDescriptionHeader>
          Jak należy przygotować się do aplikacji rzęs (dotyczy również uzupełnień)
        </StyledDescriptionHeader>
        <StyledSection>
          <p>
            {' '}
            • Przed zabiegiem proszę o przyjście z oczyszczoną twarzą (żadnego makijażu oczu oraz
            okolic). Powieki i rzęsy muszą być bezwzględnie czyste. Najlepiej umyć oczy kilka razy
            tak aby całość rzęs a w szczególności ich nasada były całkowicie oczyszczone i nie
            zawierały resztek kosmetyków.
          </p>
          <p>
            {' '}
            • Wpływ na trwałość rzęs ma również cykl miesięczny. Rzęsy gorzej się kleją a czasami
            nawet nie da się ich przykleić. Wpływają na to hormony. Najlepiej nie aplikować rzęs 3
            dni przed okresem, w trakcie i 3 dni po.
          </p>
          <p>
            • Po stosowaniu kuracji odżywczej na rzęsy (np. Revitalash) trwałość aplikacji nie jest
            gwarantowana
          </p>
          <p>
            {' '}
            • Jeżeli nosisz szkoła kontaktowe, na czas zabiegu należy je wyjąć. Po aplikacji można
            je ponownie założyć.
          </p>
          <p>
            {' '}
            • Zabieg przedłużania rzęs służy do podkreślenia oprawy naszych oczu, dlatego warto
            zastanawiać się jaki efekt końcowy chcemy uzyskać.
          </p>
        </StyledSection>
      </StyledArticle>
      <StyledLinkContainer>
        <StyledLogoContainer>
          <Image src="/mark.png" width="48" height="84" />
        </StyledLogoContainer>
        <Link href="/przedluzanie-rzes" passHref>
          <StyledLink>Przedłużanie rzęs</StyledLink>
        </Link>
        <Link href="/lifting-rzes" passHref>
          <StyledLink>Lifting rzęs</StyledLink>
        </Link>
      </StyledLinkContainer>
    </PageContainer>
  );
}

export default JakDbacORzesy;
