import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  p {
    margin: 0;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  font-family: 'Courgette', cursive;
  font-size: 108px;
  justify-content: center;
  align-items: center;
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

const StyledLabel = styled.p`
  padding: 1rem 0 2rem;
`;

export default function Custom404() {
  return (
    <Layout>
      <PageContainer>
        <LabelContainer>
          <p>4</p>
          <Image src="/brand/mark.png" width="48" height="84" alt="BeautiQ Studio" />
          <p>4</p>
        </LabelContainer>
        <StyledLabel>Ups, coś poszło nie tak.</StyledLabel>
        <Link href="/" passHref>
          <StyledLink>Strona główna</StyledLink>
        </Link>
      </PageContainer>
    </Layout>
  );
}
