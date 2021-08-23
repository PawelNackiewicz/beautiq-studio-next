import styled from 'styled-components';

export const PageContainerFlex = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin: auto;
  padding: 1rem 0;

  p {
    margin: 0;
  }
`;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem 0;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export const StyledStep = styled.p`
  font-family: 'Courgette', cursive;
  text-align: center;
  font-size: 30px;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;
  margin: 0.3rem;
  text-transform: uppercase;
`;

export const StyledArticle = styled.article`
  grid-area: article;
  max-width: 600px;
  margin: auto;
  font-size: 1.4rem;
  padding: 1rem;
`;

export const StyledSection = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledSectionCenter = styled.section`
  line-height: 170%;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const StyledSectionHeader = styled.h2`
  font-family: Ubuntu sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 150%;
  text-align: center;
`;

export const StyledLink = styled.a`
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

export const StyledLinkContainer = styled.div`
  grid-area: links;
  margin: auto;
  max-width: 600px;
  height: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  grid-area: images;
  max-width: 600px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  font-family: 'Courgette', cursive;
  font-size: 108px;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.p`
  padding: 1rem 0 2rem;
`;
