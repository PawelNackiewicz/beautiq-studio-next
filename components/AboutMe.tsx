import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  
  @media (max-width: 1000px) {
    flex-direction: column;
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
    padding: 1rem 3rem;
  }
`;

const StyledLink = styled.a`
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

const AboutMe = () => {
  return (
    <StyledContainer>
      <Image alt="Natalia Golomb" src="/o_mnie.png" width="500" height="625" />
      <ArticleContainer>
        <p>o mnie</p>
        <article>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text eve &#10084;
        </article>
        <Link href="Natalia-Golomb" passHref>
          <StyledLink>czytaj więcej</StyledLink>
        </Link>
      </ArticleContainer>
    </StyledContainer>
  );
};

export default AboutMe;
