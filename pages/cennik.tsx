import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

const PriceListWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #c4a747;
  width: 98vw;

  @media (min-width: 410px) {
    min-width: 400px;
    width: 50%;
  }

  tr:nth-of-type(odd) {
    background: lightgray;
  }

  th {
    background: black;
    color: white;
    font-weight: bold;
    font-size: 10px;
  }
  td,
  th {
    padding: 14px;
    text-align: left;
  }
`;

const StyledOfferName = styled.h4`
  font-weight: bold;
  margin: 1.5rem;
  text-align: center;
`;

const PriceListTitle = styled.h4`
  margin-top: 3rem;
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  text-align: center;
`;

function Cennik() {
  return (
    <Layout title="Oferta - BeautiQ Studio">
      <PriceListWrapper>
        <NextSeo title="Cennik - pełna oferta salonu BeautiQ Studio" description="Oferta - BeautiQ Studio - Natalia Golomb" />
        <PriceListTitle id="cennik">Cennik</PriceListTitle>
        <StyledOfferName>Przedłużanie i zagęszczenie rzęs</StyledOfferName>
        <StyledTable>
          <thead>
            <tr>
              <th />
              <th>Pierwsza aplikacja</th>
              <th>Uzupełnienie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Metoda 1:1</td>
              <td>200 zł</td>
              <td>180 zł</td>
            </tr>
            <tr>
              <td>Metoda 2D -3D</td>
              <td>210 zł</td>
              <td>190 zł</td>
            </tr>
            <tr>
              <td>Metoda 4-6D</td>
              <td>220 zł</td>
              <td>200 zł</td>
            </tr>
            <tr>
              <td>Mega Volume</td>
              <td>230 zł</td>
              <td>210 zł</td>
            </tr>
            <tr>
              <td>Lifting rzęs</td>
              <td>160zł</td>
              <td />
            </tr>
            <tr>
              <td>Ściągnięcie rzęs</td>
              <td>30zł</td>
              <td />
            </tr>
          </tbody>
        </StyledTable>
        <StyledOfferName>Profesjonalna stylizacja brwi</StyledOfferName>
        <StyledTable>
          <tbody>
            <tr>
              <td>Profesjonalna stylizacja brwi henną pudrową</td>
              <td>90 zł</td>
            </tr>
            <tr>
              <td>Regulacja brwi (pęseta + LYCON WAX)</td>
              <td>30 zł</td>
            </tr>
            <tr>
              <td>Męska naturalna stylizacja brwi</td>
              <td>50 zł</td>
            </tr>
          </tbody>
        </StyledTable>
        <StyledOfferName>Kosmetologia pielęgnacyjna</StyledOfferName>
        <StyledTable>
          <tbody>
            <tr>
              <td>Terapia Estgen</td>
              <td>200 zł</td>
            </tr>
            <tr>
              <td>Terapia Estgen + mezoterapia mikroigłowa</td>
              <td>310 zł</td>
            </tr>
            <tr>
              <td>Biorepeel Cl3</td>
              <td>250 zł</td>
            </tr>
            <tr>
              <td>Biorepeel Cl3 + mezoterapia mikroigłowa</td>
              <td>360 zł</td>
            </tr>
          </tbody>
        </StyledTable>
        <StyledOfferName>Depilacja woskiem twardym LYCON</StyledOfferName>
        <StyledTable>
          <tbody>
            <tr>
              <td>Depilacja wąsika</td>
              <td>15 zł</td>
            </tr>
            <tr>
              <td>Depilacja brody</td>
              <td>30 zł</td>
            </tr>
            <tr>
              <td>PAKIET: depilacja wąsika i brody</td>
              <td>40 zł</td>
            </tr>
          </tbody>
        </StyledTable>
      </PriceListWrapper>
    </Layout>
  );
}

export default Cennik;
