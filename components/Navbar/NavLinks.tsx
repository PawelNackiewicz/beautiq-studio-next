import styled from 'styled-components';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Dropdown from './Dropdown';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  padding: 0;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;

  @media (max-width: 1000px) {
    height: auto;
    flex-direction: column;
  }
`;

const NavItemButoon = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #111;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 1400ms ease-in;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Crimson Pro', serif;
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
    background: #c4a747;
    height: 1px;
    transition: all 0.8s ease-in;
  }
  :hover {
    color: #c4a747;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    display: flex;
  }
`;

const NavItemLink = styled.a`
  text-decoration: none;
  color: #111;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 1400ms ease-in;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  cursor: pointer;
  text-transform: uppercase;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    content: '.';
    color: transparent;
    background: #c4a747;
    height: 1px;
    transition: all 0.8s ease-in;
  }
  :hover {
    color: #c4a747;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    display: flex;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Ubuntu, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: black;
`;

type NavbarLinksProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const NavbarLinks = ({ setNavigationOpen }: NavbarLinksProps) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <StyledList>
      <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
        <NavItemButoon>RZĘSY</NavItemButoon>
        {dropdown && <Dropdown setNavigationOpen={setNavigationOpen} />}
      </NavItem>
      <NavItem>
        <Link href="/stylizacja-brwi" passHref>
          <NavItemLink onClick={() => setNavigationOpen(false)}>BRWI</NavItemLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/szkolenia" passHref>
          <NavItemLink onClick={() => setNavigationOpen(false)}>SZKOLENIA</NavItemLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/cennik" passHref>
          <NavItemLink onClick={() => setNavigationOpen(false)}>CENNIK</NavItemLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/Natalia-Golomb" passHref>
          <NavItemLink onClick={() => setNavigationOpen(false)}>O MNIE</NavItemLink>
        </Link>
      </NavItem>
    </StyledList>
  );
};

export default NavbarLinks;
