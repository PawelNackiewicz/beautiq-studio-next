import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

type LogoProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const Logo = ({ setNavigationOpen }: LogoProps) => {
  return (
    <Link href="/" passHref>
      <a onClick={() => setNavigationOpen(false)}>
        <HeaderContainer>
          <Image alt="logo" src="/brand/logo_gold.png" width="172" height="52" />
        </HeaderContainer>
      </a>
    </Link>
  );
};

export default Logo;
