import styled from 'styled-components';
import Image from 'next/image';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
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

const StyledSectionHeader = styled.p`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  margin: 0.3rem;
`;

function Szkolenia() {
  return (
    <PageContainer>
      <Image alt="Natalia Golomb" src="/szkolenie-przedluzanie-rzes.jpg" width="770" height="510" />
      <StyledHeader>SZKOLENIA Z PRZEDŁUŻANIA RZĘS - WOJEWÓDZTWO OPOLSKIE</StyledHeader>
      <StyledArticle>
        <StyledSection>
          Jestem trenerem stylizacji rzęs w firmie Rarity Academy. Jest to firma stworzona przez
          ikonę branży rzęsowej Monikę Mroczkę i jej męża.
        </StyledSection>
        <StyledSection>
          Programy szkoleniowe Rarity Academy wyróżniają się prostotą i konkretną wiedzą- która
          sprawia, że kursantka od razu po ukończeniu szkolenia NAPRAWDĘ potrafi przedłużać rzęsy !
          W województwie opolskim to ja reprezentuję jako instruktor firmę Rarity i mam zaszczyt
          prowadzić naprawdę świetne szkolenia! Jako instruktor zadbam oto, abyś kończąc szkolenie
          czuła się w 100% pewna swoich umiejętności! Po szkoleniu natomiast będziesz otoczona moją
          opieką- w razie pytań zawsze służę pomocą ! Jakie szkolenie wybrać aby zostać
          profesjonalną stylistką?
        </StyledSection>
        <StyledSectionHeader>Szkolenie z metody podstawowej (1:1)</StyledSectionHeader>
        <StyledSection>
          Jest to podstawa podstaw. Jest to tak zwana królowa metod! To na tym szkoleniu nauczysz
          się fundamentów w stylizacji rzęs. Czym są rzęsy? Klej? Polimeryzacja? Powierzchnia styku?
          Jak separować i zabezpieczać powiekę dolną? Poznasz wszystkie najważniejsze produkty
          potrzebne do stworzenia pięknych aplikacji! I wiele, wiele więcej! :) Jest to
          najważniejsze szkolenie, gwarantuję, że nauczysz się wszystkiego co będzie Ci potrzebne
          aby natychmiast zacząć przyjmować klientki i zarabiać pieniądze!
        </StyledSection>
        <StyledSectionHeader>Szkolenie z 1 stopnia objętości (2-3D)</StyledSectionHeader>
        <StyledSection>
          Jeżeli ukończyłaś szkolenie podstawowe, możesz przejść już do nauki robienia kępek - jest
          to podstawa metod objętościowych. Nauczę Cię różnych metod ich tworzenia, różnymi
          zakrzywieniami pęset. Poznasz bardziej zaawansowane techniki tworzenia aplikacji LIGHT
          VOLUME oraz skupimy się na schematach wyklejania. Po ukończeniu tego szkolenia możesz
          dopisać kolejną usługę do swojego cennika!
        </StyledSection>
        <StyledSectionHeader>Szkolenie z 2 stopnia objętości (4-6D)</StyledSectionHeader>
        <StyledSection>
          Tworzenie rzęs metodą Mega Volume jest kolejnym krokiem po małych objętościach! Na tym
          szkoleniu dowiesz się jak tworzyć trwałe stylizacje i mocniejsze efekty. Tworzenie kępek
          4-6D to nie łatwa sprawa ale spokojnie, wszystkiego Cię nauczę. Rozwiniemy każdy temat,
          który był poruszany na szkoleniu z lekkich objętości i bardziej go rozwiniemy. Stylizacja
          rzęs nie będzie miała już przed Tobą żadnych tajemnic!
        </StyledSection>
        <StyledSectionHeader>SZKOLENIA HYBRYDOWE</StyledSectionHeader>
        <StyledSection>
          Więcej informacji na temat szkoleń znajdziesz na www.nataliagolomb.pl tam również możesz
          od razu wybrać termin i zarezerwować dla siebie szkolenie W razie jakichkolwiek pytań
          zapraszam Cię do kontaktu :-)
        </StyledSection>
      </StyledArticle>
    </PageContainer>
  );
}

export default Szkolenia;