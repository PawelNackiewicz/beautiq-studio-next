import styled from 'styled-components';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const NavItem = styled.a`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  cursor: pointer;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    content: '.';
    color: transparent;
    background: #b8987b;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #b8987b;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

type NavbarLinksProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const NavbarLinks = ({ setNavigationOpen }: NavbarLinksProps) => {
  return (
    <>
      <Link href="/przedluzanie-rzes">
        <NavItem onClick={() => setNavigationOpen(false)}>PRZEDŁUŻANIE RZĘS</NavItem>
      </Link>
      <Link href="/lifting-rzes">
        <NavItem onClick={() => setNavigationOpen(false)}>LIFTING RZĘS</NavItem>
      </Link>
      <Link href="/stylizacja-brwi">
        <NavItem onClick={() => setNavigationOpen(false)}>STYLIZACJA BRWI</NavItem>
      </Link>
      <Link href="/jak-dbac-o-rzesy">
        <NavItem onClick={() => setNavigationOpen(false)}>PIELĘGNACJA RZĘS</NavItem>
      </Link>
      <Link href="/Natalia-Golomb">
        <NavItem onClick={() => setNavigationOpen(false)}>O MNIE</NavItem>
      </Link>
    </>
  );
};

export default NavbarLinks;
