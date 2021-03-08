import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Logo from './Logo';
import NavbarLinks from './NavLinks';

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 0.1rem solid black;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  background-color: white;
  @media (max-width: 1000px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const Navbox = styled.div<NavbarProps>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: white;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${({ isOpen }) => (isOpen ? '-100%' : '0')};
  }
`;

const Hamburger = styled.div<NavbarProps>`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

type NavbarProps = {
  isOpen: boolean;
};

const Navbar = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <Navigation>
      <Logo setNavigationOpen={setNavigationOpen} />
      <Toggle onClick={() => setNavigationOpen(!navigationOpen)}>
        <Hamburger isOpen={navigationOpen} />
      </Toggle>
      <Navbox isOpen={!navigationOpen}>
        <NavbarLinks setNavigationOpen={setNavigationOpen} />
      </Navbox>
    </Navigation>
  );
};

export default Navbar;
