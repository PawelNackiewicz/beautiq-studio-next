import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 3rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledLink = styled.p`
  position: relative;
  top: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(0, 0, 0);
  letter-spacing: 1px;
  font-size: 12px;
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

const StyledArticle = styled.article`
  text-align: center;
`;

const StyledHeader = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
`;

const StyledParagraph = styled.p``;

const Coaching = () => {
  return (
    <StyledContainer>
      <ArticleContainer>
        <StyledHeader>szkolenia</StyledHeader>
        <StyledArticle>
          <StyledParagraph><strong>Jak zostać stylistką rzęs?</strong> </StyledParagraph>
          <StyledParagraph><strong>Jak nauczyć się przedłużać rzęsy?</strong></StyledParagraph>
          <StyledParagraph>Chciałabyś zdobyć nowy zawód?</StyledParagraph>
          <StyledParagraph>Szukasz pracy dodatkowej?</StyledParagraph>
          <StyledParagraph>
            A może już jesteś w branży beauty i chciałabyś zdobyć nowe kwalifikacje?
          </StyledParagraph>
          <StyledParagraph>
            A może sama jesteś klientką i chciałabyś spróbować być po tej drugiej stronie?
          </StyledParagraph>
          <StyledParagraph>
            Jakikolwiek jest powód tego, że tu zaglądasz... Jeżeli szukasz profesjonalnego oraz
            efektywnego szkolenia w województwie Opolskim to jesteś w najlepszym miejscu !
          </StyledParagraph>
          <StyledParagraph>
            Prowadzę <strong> szkolenia w wojewódzctwie Opolskim z przedłużania rzęs</strong>. Szkolenia te prowadzę w ramach współpracy z firmą Rarity Academy. 
          </StyledParagraph>
        </StyledArticle>
        <Link href="/szkolenia" passHref>
          <StyledLink>czytaj więcej</StyledLink>
        </Link>
      </ArticleContainer>
      <Image alt="szkolenia" src="/images/homePage/szkolenia-opolskie.png" width="510" height="765" />
    </StyledContainer>
  );
};

export default Coaching;
