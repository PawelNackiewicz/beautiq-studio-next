import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
};

const Logo = ({ setNavigationOpen }: LogoProps) => {
  return (
    <Link href="/" passHref>
      <a onClick={() => setNavigationOpen(false)}>
        <Image alt="logo" src="/logo.png" width="64" height="40" />
      </a>
    </Link>
  );
};

export default Logo;
