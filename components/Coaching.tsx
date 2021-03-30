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

  p {
    font-weight: 700;
    text-transform: uppercase;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledLinkItem = styled.p`
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

const Coaching = () => {
  return (
    <StyledContainer>
      <ArticleContainer>
        <p>szkolenia</p>
        <article>
          Prowadzę profesjonalne szkolenia z różnych metod przedłużania rzęs w ramach współpracy z firmą Rarity. Szkolenia te skierowane są dla całego województwa opolskiego... &#10084;
        </article>
        <StyledLink href="https://rarityacademy.pl/natalia-golomb" target="_blank" rel="noreferrer">
          <StyledLinkItem>czytaj więcej</StyledLinkItem>
        </StyledLink>
      </ArticleContainer>
      <Image alt="szkolenia" src="/szkolenia.png" width="500" height="750" />
    </StyledContainer>
  );
};

export default Coaching;
