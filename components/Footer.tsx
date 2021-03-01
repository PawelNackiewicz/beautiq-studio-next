import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterContainer = styled.footer`
  width: 100%;
  display: grid;
  margin: auto;
  padding-top: 1rem;
  border-top: 0.1rem solid black;
  grid-template-areas:
    'address siteMap offer socialMedia'
    '. copyrights copyrights .';

  @media (max-width: 600px) {
    grid-template-areas:
      'address'
      'offer'
      'siteMap'
      'socialMedia'
      'copyrights';
  }
`;

const AddressContainer = styled.div`
  grid-area: address;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: start;
    margin-bottom: 30px;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin: 0.7rem 0.5rem;

  @media (min-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin: 0.5rem;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 0.5rem;
  display: none;
  @media (min-width: 600px) {
    display: inline;
  }
`;

const StudioName = styled.span`
  font-weight: normal;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
`;

const SocialMediaContainer = styled.nav`
  grid-area: socialMedia;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-family: Ubuntu, serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: black;
    margin: 0.5rem;
    img {
      display: none;
    }
    p {
      display: inline;
    }
  }

  @media (min-width: 600px) {
    a {
      img {
        display: inline;
      }
      p {
        display: none;
      }
    }
  }
`;

const OfferContainer = styled.nav`
  grid-area: offer;
  display: flex;
  flex-direction: column;
`;

const SiteMapContainer = styled.nav`
  grid-area: siteMap;
  display: flex;
  flex-direction: column;
`;
const CopyrightsContainer = styled.div`
  grid-area: copyrights;
  margin: 1.5rem auto;
  font-size: 14px;
  line-height: 16px;

  @media (min-width: 600px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-family: Ubuntu, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: black;
  margin: 0.5rem;
  cursor: pointer;

  @media (min-width: 600px) {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
`;

const Footer = React.memo(() => {
  return (
    <FooterContainer>
      <AddressContainer>
        <AddressWrapper>
          <StudioName>BeautiQ Studio</StudioName>
          <span>Częstochowska 15</span>
          <span>46-040 Ozimek</span>
          <span>533 571 754</span>
          <LogoWrapper>
            <Image alt="logo" src="/logo.png" width="64" height="40" />
          </LogoWrapper>
        </AddressWrapper>
      </AddressContainer>
      <SiteMapContainer>
        <Link href="/">
          <NavItem>Cennik</NavItem>
        </Link>
        <Link href="/">
          <NavItem>Kontakt</NavItem>
        </Link>
        <Link href="/">
          <NavItem>O mnie</NavItem>
        </Link>
      </SiteMapContainer>
      <OfferContainer>
        <Link href="/przedluzanie-rzes">
          <NavItem>Przedłużanie rzęs</NavItem>
        </Link>
        <Link href="/lifting-rzes">
          <NavItem>Lifting rzęs</NavItem>
        </Link>
        <Link href="/stylizacja-brwi">
          <NavItem>Stylizacja brwi</NavItem>
        </Link>
        <Link href="/jak-dbac-o-rzesy">
          <NavItem>Pielęgnacja rzęs</NavItem>
        </Link>
      </OfferContainer>
      <SocialMediaContainer>
        <a href="https://www.facebook.com/beautiq.studio.ozimek/" target="_blank" rel="noreferrer">
          <Image src="/icons/facebook.png" alt="facebook" width="30" height="30" />
          <p>Facebook</p>
        </a>
        <a
          href="https://www.instagram.com/beautiq_studio_natalia_golomb/?hl=pl"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/icons/instagram.png" alt="instagram" width="30" height="30" />
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/natalia-golomb/" target="_blank" rel="noreferrer">
          <Image src="/icons/linkedin.png" alt="linkedin" width="30" height="30" />
          <p>LinkedIn</p>
        </a>
      </SocialMediaContainer>
      <CopyrightsContainer>
        <span>Copyrights BeautiQ Studio</span>
      </CopyrightsContainer>
    </FooterContainer>
  );
});

export default Footer;
