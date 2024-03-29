import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import {
  ImageContainer,
  StyledArticle,
  StyledSectionHeader,
  StyledHeader,
  StyledLink,
  StyledLinkContainer,
  StyledLogoContainer,
  StyledSectionCenter,
} from '../styles/index';
import styled from 'styled-components';

export const PageContainer = styled.div`
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

function JakDbacORzesy() {
  let isMobileView = true;
  if (typeof window !== 'undefined') {
    isMobileView = window.screen.width > 1000;
  }

  return (
    <Layout title="Jak dbać o rzęsy">
      <PageContainer>
        <NextSeo
          title="Jak dbać o przedłużone rzęsy aby nie wypadały kępki"
          description="skuteczna pielęgnacja rzęs"
        />
        <ImageContainer>
          <Image
            src="/images/lashPages/jak-dbac-o-rzesy.png"
            width="600"
            height="750"
            alt="jak dbać o rzęsy"
            quality={100}
          />
          {isMobileView && (
            <>
              <Image
                src="/images/lashPages/jak-dbac-o-rzesy-2.png"
                width="600"
                height="750"
                alt="jak dbać o rzęsy"
                quality={100}
              />
              <Image
                src="/images/lashPages/jak-dbac-o-rzesy-3.png"
                width="600"
                height="750"
                alt="jak pielęgnować rzęsy"
                quality={100}
              />
            </>
          )}
        </ImageContainer>
        <StyledArticle>
          <StyledHeader>Zasady pielęgnacji rzęs</StyledHeader>
          <StyledSectionHeader>Do 48 godzin po zabiegu</StyledSectionHeader>
          <StyledSectionCenter>
            <p>• Unikać pocierania rzęs</p>
            <p>
              {' '}
              • Unikać narażania rzęs na działanie wody, ciepła oraz pary wodnej (gorącego
              prysznica, sauny, solarium, basenu)
            </p>
            <p>• Nie stosować żadnych kosmetyków w okolicy oczu</p>
            <p> • Przeczesywać rzęsy rano i wieczorem specjalną szczoteczką</p>
            <p>
              {' '}
              • Unikać zabiegów chemicznych na twarz oraz zabiegów mogących podrażnić okolice oczu
            </p>
            <p>
              {' '}
              • Spać na plecach oraz nie dotykać rzęs, aby nie powyginały się w trakcie wiązania
              kleju
            </p>
          </StyledSectionCenter>
          <StyledSectionHeader>Po 48 godzinach po zabiegu</StyledSectionHeader>
          <StyledSectionCenter>
            <p>• Unikać nadmiernego pocierania rzęs</p>
            <p>
              • Unikać makijażu oczu a jeżeli jest to niemożliwe, unikać kosmetyków wodoodpornych a
              później wykonywać bardzo dokładny demakijaż. Po każdym myciu rzęs przeczesywać
              dokładnie rzęsy w sposób pokazany przez stylistkę.
            </p>
            <p>
              • Przy każdej wizycie w celu dopełnienia rzęs, dostanie Pani ode mnie nową
              szczoteczkę.
            </p>
            <p>
              • Zachować ostrożność przy codziennej higienie i demakijaży oczu- NIE używać
              włóknistych materiałów oraz substancji natłuszczających na bazie olejków
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
          </StyledSectionCenter>
          <StyledSectionCenter>
            Sztuczne rzęsy wykonane są z wysokiej jakości syntetycznego materiału idealnie
            imitującego naturalną rzęsę. Prawidłowa aplikacja sztucznych rzęs nie powoduje
            dyskomfortu. Właściwie dobrane rzęsy nie ciągną, nie czujemy ich ciężaru. Cykl życia
            rzęsy trwa około 3-4 tyg. Każdego dnia tracimy z jednego oka 2/3 rzęst w naturalnym
            cyklu a na jej miejscu wyrasta nowa, zdrowa rzęsa. Dlatego zalecam dopełnienie po 3/max
            4 tyg. Ze względów higienicznych polecam zdejmowanie aplikacji, co 3-4 uzupełnienie.
            Dzięki temu możemy prowadzić diagnostykę życia naturalnej rzęsy, a także oczyścić brzegi
            powiek. Nie wolno samodzielnie usuwać lub wyrywać przedłużonych rzęs! Może to spowodować
            ich uszkodzenie i utrudnić regenerację. Rzęsy można usunąć tylko przy użyciu specjalnego
            preparatu przez przeszkoloną stylisktę. Stylistka nie ponosi odpowiedzialności za
            aplikację w przypadku nie stosowania się do powyższych zaleceń- reklamacje nie będą
            uwzględniane. Reklamację uwzględniam do tygodnia po zabiegu. Tylko w przypadku
            nietrwałej aplikacji.
          </StyledSectionCenter>
          <StyledSectionHeader>
            Jak należy przygotować się do aplikacji rzęs (dotyczy również uzupełnień)
          </StyledSectionHeader>
          <StyledSectionCenter>
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
              • Po stosowaniu kuracji odżywczej na rzęsy (np. Revitalash) trwałość aplikacji nie
              jest gwarantowana
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
          </StyledSectionCenter>
        </StyledArticle>
        <StyledLinkContainer>
          <StyledLogoContainer>
            <Image src="/brand/mark.png" width="48" height="84" alt="BeautiQ Studio" />
          </StyledLogoContainer>
          <Link href="/przedluzanie-rzes" passHref>
            <StyledLink>Przedłużanie rzęs</StyledLink>
          </Link>
          <Link href="/lifting-rzes" passHref>
            <StyledLink>Lifting rzęs</StyledLink>
          </Link>
        </StyledLinkContainer>
      </PageContainer>
    </Layout>
  );
}

export default JakDbacORzesy;
