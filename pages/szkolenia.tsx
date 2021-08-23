import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

import {
  StyledArticle,
  StyledHeader,
  StyledSectionCenter,
  StyledLink,
  StyledSectionHeader,
  PageContainerFlex,
  StyledImageWrapper,
} from '../styles/index';

const StyledLinkParagraph = styled.a`
  margin: auto;
  text-decoration: none;
  margin-bottom: 3rem;
`;

function Szkolenia() {
  return (
    <Layout title="Szkolenia">
      <PageContainerFlex>
        <NextSeo
          title="Szkolenie z przedłużania rzęs - Opolskie"
          description="Szkolenia ze stylizacji rzęs pod patronatem firmy Rarity. Szkolenia obdywają się w wojewódzctwie Opolskim - w Ozimku. Ozimek jest oddalony 20km od Opola. W ramach szkolen można dokształcać się z przedłużania rzęs każdą metodą - od 1:1 do 4D"
        />
        <StyledImageWrapper>
          <Image
            alt="Natalia Golomb"
            src="/images/trainingPage/szkolenie-przedluzanie-rzes.jpg"
            width="770"
            height="510"
            quality={100}
          />
        </StyledImageWrapper>
        <StyledHeader>SZKOLENIA Z PRZEDŁUŻANIA RZĘS</StyledHeader>
        <StyledSectionHeader>WOJEWÓDZTWO OPOLSKIE</StyledSectionHeader>
        <StyledArticle>
          <StyledSectionCenter>
            Jestem trenerem stylizacji rzęs w firmie <strong>Rarity Academy</strong>. Jest to firma
            stworzona przez ikonę branży rzęsowej Monikę Mroczkę i jej męża.
          </StyledSectionCenter>
          <StyledSectionCenter>
            Programy szkoleniowe Rarity Academy wyróżniają się{' '}
            <strong>prostotą i konkretną wiedzą</strong> - która sprawia, że kursantka od razu po
            ukończeniu szkolenia <strong>NAPRAWDĘ</strong> potrafi przedłużać rzęsy! W województwie
            opolskim to ja reprezentuję jako instruktor firmę Rarity i mam zaszczyt prowadzić
            naprawdę świetne szkolenia! Jako instruktor zadbam oto,{' '}
            <strong>abyś kończąc szkolenie czuła się w 100% pewna swoich umiejętności!</strong> Po
            szkoleniu natomiast będziesz otoczona moją opieką - w razie pytań zawsze służę pomocą!
            Jakie szkolenie wybrać aby zostać profesjonalną stylistką?
          </StyledSectionCenter>
          <StyledSectionHeader>Szkolenie z metody podstawowej (1:1)</StyledSectionHeader>
          <StyledSectionCenter>
            Jest to podstawa podstaw. Jest to tak zwana królowa metod! To na tym{' '}
            <strong>szkoleniu nauczysz się fundamentów w stylizacji rzęs.</strong> Czym są rzęsy?
            Klej? Polimeryzacja? Powierzchnia styku? Jak separować i zabezpieczać powiekę dolną?
            Poznasz wszystkie najważniejsze produkty potrzebne do stworzenia pięknych aplikacji! I
            wiele, wiele więcej! Jest to
            <strong> najważniejsze szkolenie</strong>, gwarantuję, że nauczysz się wszystkiego co
            będzie Ci potrzebne aby natychmiast zacząć przyjmować klientki i zarabiać pieniądze!
          </StyledSectionCenter>
          <StyledSectionHeader>Szkolenie z 1 stopnia objętości (2-3D)</StyledSectionHeader>
          <StyledSectionCenter>
            Jeżeli ukończyłaś szkolenie podstawowe, możesz przejść już do nauki robienia kępek -
            jest to <strong>podstawa metod objętościowych</strong>. Nauczę Cię różnych metod ich
            tworzenia, różnymi zakrzywieniami pęset. Poznasz bardziej zaawansowane techniki
            tworzenia aplikacji <strong>LIGHT VOLUME</strong> oraz skupimy się na schematach
            wyklejania. Po ukończeniu tego szkolenia możesz dopisać kolejną usługę do swojego
            cennika!
          </StyledSectionCenter>
          <StyledSectionHeader>Szkolenie z 2 stopnia objętości (4-6D)</StyledSectionHeader>
          <StyledSectionCenter>
            Tworzenie rzęs metodą <strong>Mega Volume</strong> jest kolejnym krokiem po małych
            objętościach! Na tym szkoleniu dowiesz się jak tworzyć trwałe stylizacje i mocniejsze
            efekty. Tworzenie kępek 4-6D to nie łatwa sprawa ale spokojnie, wszystkiego Cię nauczę.
            Rozwiniemy każdy temat, który był poruszany na szkoleniu z lekkich objętości i bardziej
            go rozwiniemy.
            <strong> Stylizacja rzęs nie będzie miała już przed Tobą żadnych tajemnic!</strong>
          </StyledSectionCenter>
          <StyledSectionHeader>SZKOLENIA HYBRYDOWE</StyledSectionHeader>
          <StyledSectionCenter>
            Więcej informacji na temat szkoleń znajdziesz w linku poniżej, tam również możesz od
            razu wybrać termin i zarezerwować dla siebie szkolenie W razie jakichkolwiek pytań
            zapraszam Cię do kontaktu :-)
          </StyledSectionCenter>
        </StyledArticle>
        <StyledLinkParagraph
          href="https://rarityacademy.pl/natalia-golomb"
          target="_blank"
          rel="noreferrer"
        >
          <StyledLink>Zapisz się na szkolenie</StyledLink>
        </StyledLinkParagraph>
      </PageContainerFlex>
    </Layout>
  );
}

export default Szkolenia;
