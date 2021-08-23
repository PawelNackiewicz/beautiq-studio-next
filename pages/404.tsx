import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import {
  PageContainerFlex,
  StyledLink,
  LabelContainer,
  StyledLabel
} from '../styles/index';

export default function Custom404() {
  return (
    <Layout>
      <PageContainerFlex>
        <LabelContainer>
          <p>4</p>
          <Image src="/brand/mark.png" width="48" height="84" alt="BeautiQ Studio" />
          <p>4</p>
        </LabelContainer>
        <StyledLabel>Ups, coś poszło nie tak.</StyledLabel>
        <Link href="/" passHref>
          <StyledLink>Strona główna</StyledLink>
        </Link>
      </PageContainerFlex>
    </Layout>
  );
}
