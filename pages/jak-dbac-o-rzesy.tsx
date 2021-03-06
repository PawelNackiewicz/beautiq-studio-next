import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const PageContainer = styled.div`
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

const StyledArticle = styled.article`
  max-width: 600px;
  margin: auto;
  font-size: 19px;
  padding: 1rem;
`

const StyledSection = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
  text-align: center;
`

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const StyledDescriptionHeader = styled.h6`
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
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

const ImageConteiner = styled.div`
  width: 64%;
  margin: auto;
`


function JakDbacORzesy() {
  return (
    <PageContainer>
    <ImageConteiner>
      //img
    </ImageConteiner>
    <StyledArticle>
      <StyledHeader>Zasady pielęgnacji rzęs</StyledHeader>
      <StyledDescriptionHeader>Do 48 godzin po zabiegu</StyledDescriptionHeader>
      <StyledSection>
        <p>• Unikać pocierania rzęs</p>
        <p> • Unikać narażania rzęs na działanie wody, ciepła oraz pary wodnej (gorącego prysznica, sauny, solarium,
          basenu)</p>
        <p>• Nie stosować żadnych kosmetyków w okolicy oczu</p>
        <p> • Przeczesywać rzęsy rano i wieczorem specjalną szczoteczką</p>
        <p> • Unikać zabiegów chemicznych na twarz oraz zabiegów mogących podrażnić okolice oczu</p>
        <p> • Spać na plecach oraz nie dotykać rzęs, aby nie powyginały się w trakcie wiązania kleju</p>
      </StyledSection>
      <StyledDescriptionHeader>Po 48 godzinach po zabiegu</StyledDescriptionHeader>
      <StyledSection>
        <p>• Unikać nadmiernego pocierania rzęs</p>
        <p>• Unikać makijażu oczu a jeżeli jest to niemożliwe, unikać kosmetyków wodoodpornych a później wykonywać
          bardzo dokładny demakijaż. Po każdym myciu rzęs przeczesywać dokładnie rzęsy w sposób pokazany przez
          stylistkę.</p>
        <p>• Przy każdej wizycie w celu dopełnienia rzęs, dostanie Pani ode mnie nową szczoteczkę.</p>
        <p>• Zachować ostrożność przy codziennej higienie i demakijaży oczu- NIE używać włóknistych materiałów oraz
          substancji natłuszczających na bazie olejków</p>
        <p>• Unikać stosowania innych tłustych kosmetyków w okolicach oczu takich jak kremy, podkłady wazelina,
          mleczko kosmetyczne. <b>TŁUSZCZ ROZPUSZCZA WIĄZANIE KLEJU</b></p>
        <p>• Ograniczyć wizyty w saunie i w solarium- zbyt częste nagłe temperatury mogą osłabić wiązanie kleju</p>
        <p>• Nie stosować zalotki- grozi to połamaniem rzęs</p>
        <p>• Ograniczyć spanie na brzuchu</p>
      </StyledSection>
      <StyledSection>Sztuczne rzęsy wykonane są z wysokiej jakości syntetycznego materiału idealnie imitującego
        naturalną rzęsę.
        Prawidłowa aplikacja sztucznych rzęs nie powoduje dyskomfortu. Właściwie dobrane rzęsy nie ciągną, nie
        czujemy ich ciężaru. Cykl życia rzęsy trwa około 3-4 tyg. Każdego dnia tracimy z jednego oka 2/3 rzęst w
        naturalnym cyklu a na jej miejscu wyrasta nowa, zdrowa rzęsa. Dlatego zalecam dopełnienie po 3/max 4 tyg.
        Ze względów higienicznych polecam zdejmowanie aplikacji, co 3-4 uzupełnienie.
        Dzięki temu możemy prowadzić diagnostykę życia naturalnej rzęsy, a także oczyścić brzegi powiek.
        Nie wolno samodzielnie usuwać lub wyrywać przedłużonych rzęs! Może to spowodować ich uszkodzenie i utrudnić
        regenerację. Rzęsy można usunąć tylko przy użyciu specjalnego preparatu przez przeszkoloną stylisktę.
        Stylistka nie ponosi odpowiedzialności za aplikację w przypadku nie stosowania się do powyższych zaleceń-
        reklamacje nie będą uwzględniane.
        Reklamację uwzględniam do tygodnia po zabiegu. Tylko w przypadku nietrwałej aplikacji.
      </StyledSection>
      <StyledDescriptionHeader>Jak należy przygotować się do aplikacji rzęs (dotyczy również
        uzupełnień)</StyledDescriptionHeader>
      <StyledSection>
        <p> • Przed zabiegiem proszę o przyjście z oczyszczoną twarzą (żadnego makijażu oczu oraz okolic). Powieki i
          rzęsy muszą być bezwzględnie czyste. Najlepiej umyć oczy kilka razy tak aby całość rzęs a w szczególności
          ich nasada były całkowicie oczyszczone i nie zawierały resztek kosmetyków.</p>
        <p> • Wpływ na trwałość rzęs ma również cykl miesięczny. Rzęsy gorzej się kleją a czasami nawet nie da się
          ich przykleić. Wpływają na to hormony. Najlepiej nie aplikować rzęs 3 dni przed okresem, w trakcie i 3 dni
          po.</p>
        <p>• Po stosowaniu kuracji odżywczej na rzęsy (np. Revitalash) trwałość aplikacji nie jest gwarantowana</p>
        <p> • Jeżeli nosisz szkoła kontaktowe, na czas zabiegu należy je wyjąć. Po aplikacji można je ponownie
          założyć.</p>
        <p> • Zabieg przedłużania rzęs służy do podkreślenia oprawy naszych oczu, dlatego warto zastanawiać się jaki
          efekt końcowy chcemy uzyskać.</p>
      </StyledSection>
    </StyledArticle>
    <StyledLogoContainer>
     <Image src="/mark.png" width="48" height="84" />
    </StyledLogoContainer>
    <StyledLink href="/przedluzanie-rzes" passHref>
      <StyledImageOfferLabel>
        Przedłużanie rzęs
      </StyledImageOfferLabel>
    </StyledLink>
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
  </PageContainer>
  );
}

export default JakDbacORzesy;
