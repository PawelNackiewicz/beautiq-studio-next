import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  z-index: 10;
  position: absolute;
  top: 63px;
  list-style: none;
  padding: 0;
  border: solid 1px black;

  @media (max-width: 1000px) {
    top: 83px;
    width: 100vw;
    position: static;
    border: none;
  }
`;

const StyledLi = styled.li`
  background: white;
`;

const StyledLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #000;
  padding: 16px;
  :hover {
    color: #c4a747;
  }
`;

const MenuItems = [
  {
    title: 'Przedłużanie rzęs',
    path: '/przedluzanie-rzes',
  },
  {
    title: 'Lifting rzęs',
    path: '/lifting-rzes',
  },
  {
    title: 'Jak dbać o rzęsy',
    path: '/jak-dbac-o-rzesy',
  },
];


type DropdownProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ setNavigationOpen }: DropdownProps) => {
  return (
    <StyledUl>
      {MenuItems.map((item, index) => {
        return (
          <StyledLi key={index} onClick={() => setNavigationOpen(false)}>
            <Link href={item.path} passHref>
              <StyledLink>{item.title}</StyledLink>
            </Link>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

export default Dropdown;
