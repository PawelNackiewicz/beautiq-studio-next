import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

type LogoProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const Logo = ({ setNavigationOpen }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="/logo.png"
        width="64"
        height="40"
        onClick={() => setNavigationOpen(false)}
      />
    </Link>
  );
};

export default Logo;
