import styled from 'styled-components';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Link from 'next/link';

import {
  PageContainer,
  StyledArticle,
  StyledLogoContainer,
  StyledSectionHeader,
  StyledSection,
  StyledHeader,
  StyledLink,
  StyledLinkContainer,
} from '../styles/index';

const StyledList = styled.ul``;
const StyledListElement = styled.li`
  margin: 0.6rem 0;
`;

function MakijazPermanentnyPrzeciwwskazania() {
  return (
    <Layout title="Makijaż permanentny">
      <PageContainer>
        <NextSeo
          title="Makijaż permanentny przeciwwskazania"
          description="kiedy nie warto decydować się na makijaż permanentny"
        />
        <StyledArticle>
          <StyledHeader>Jakie są przeciwskazania do makijażu permanentnego?</StyledHeader>
          <StyledSectionHeader>Przeciwskazania bezwzględne:</StyledSectionHeader>
          <StyledList>
            <StyledListElement>ciąża</StyledListElement>
            <StyledListElement>alergia na barwniki do pigmentacji skóry</StyledListElement>
            <StyledListElement>łuszczyca w fazie aktywnej</StyledListElement>
            <StyledListElement>bielactwo w fazie aktywnej</StyledListElement>
            <StyledListElement>nieustabilizowana cukrzyca</StyledListElement>
            <StyledListElement>hemofilia (zaburzenia krzepliwości krwi)</StyledListElement>
            <StyledListElement>HIV</StyledListElement>
            <StyledListElement>żółtaczka typu C</StyledListElement>
            <StyledListElement>opryszczka w fazie aktywnej</StyledListElement>
            <StyledListElement>
              leki do aplikacji miejscowej w obszarze objętym zabiegiem
            </StyledListElement>
            <StyledListElement>leki retinoidowe</StyledListElement>
          </StyledList>
          <StyledSectionHeader>przeciwskazania wzgledne:</StyledSectionHeader>
          <StyledList>
            <StyledListElement>epilepsja</StyledListElement>
            <StyledListElement>stary makijaż permanentny</StyledListElement>
            <StyledListElement>
              zmiany dermatologiczne w obszarze poddawanym zabiegowi (trądzik ropowiczy, stany
              ropne, alergiczne lub grzubicze zmiany w okolicach podlegających zabiegowi,
              naczyniaki, liszaje, brodawzaki, przerwania ciągłości naskórka, poparzenia słoneczne
            </StyledListElement>
            <StyledListElement>choroba nowotworowa</StyledListElement>
            <StyledListElement>żółtaczka typu B</StyledListElement>
            <StyledListElement>
              przyjmowanie antybiotyków (odstęp od odstawienia wynosi min. 2 tyg)
            </StyledListElement>
            <StyledListElement>
              stosowanie leków rozrzedzających krew (np. acard, ibuprom). Leki, które rozrzedzają
              krew powodują większe krwawienie podczas zabiegu a co za tym idzie większe ryzyko
              nieprzyjęcia się pigmentu
            </StyledListElement>
            <StyledListElement>
              Zabieg złuszczania naskórka wykonany przez okres 4 tygodni przed zabiegiem{' '}
            </StyledListElement>
            <StyledListElement>
              Stosowanie odżywek do rewitalizacji, stymulacji wzrotstu brwi i rzęs w okresie 3-6
              m-cy przed zabiegiem
            </StyledListElement>
            <StyledListElement>karmienie piersią</StyledListElement>
            <StyledListElement>
              występienie w przeszłości reakcji alergicznej na lidokainę np. podczas znieczulenia
            </StyledListElement>
            <StyledListElement>arytmia serca</StyledListElement>
            <StyledListElement>nadpobudliwość nerwowa</StyledListElement>
            <StyledListElement>stan zapalny oczu lub powiek</StyledListElement>
            <StyledListElement>skóra z tendencją do keloidów i blizn</StyledListElement>
            <StyledListElement>kuracja sterydowa</StyledListElement>
            <StyledListElement>leki antydepresyjne</StyledListElement>
            <StyledListElement>
              podwyższona temperatura, przeziębienie w dniu zabiegu
            </StyledListElement>
            <StyledListElement>
              Spożywanie alkoholu lub stosowanie środków odurzających ostatnich 24h{' '}
            </StyledListElement>
            <StyledListElement>
              przyjmowanie niesteroidowych leków przeciwzapalnych (NPLZ typu aspiryna, ibuprom,
              apap)
            </StyledListElement>
            <StyledListElement>skóra tłusta, porowata, gruba</StyledListElement>
            <StyledListElement>
              choroba autoimmunologiczna np. zaburzenia pracy tarczycy, niedoczynność i nadczynność
              tarczycy, łuszczyca, bielactwo
            </StyledListElement>
            <StyledListElement>
              Choroba autoimmunologiczna jest przeciwskazaniem do zabiegu. Nie jest wiadomo jak
              zachowa się pigment w skórze. Zostałam poinformaowana o wszystkich przeciwskazaniach i
              powikłaniach po zabiegach i mimo wszystko decyduję się na zabieg
            </StyledListElement>
          </StyledList>
        </StyledArticle>
        <StyledLinkContainer>
          <StyledLogoContainer>
            <Image src="/brand/mark.png" width="48" height="84" />
          </StyledLogoContainer>
          <Link href="/makijaz-permanentny" passHref>
            <StyledLink>Makijaż Permanentny</StyledLink>
          </Link>
        </StyledLinkContainer>
      </PageContainer>
    </Layout>
  );
}

export default MakijazPermanentnyPrzeciwwskazania;
