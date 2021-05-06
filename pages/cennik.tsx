import styled from 'styled-components';
import { NextSeo } from 'next-seo';

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
    <PriceListWrapper>
       <NextSeo
      title="Cennik"
      description="Oferta - BeautiQ Studio - Natalia Golomb"
    />
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
            <td>170 zł</td>
            <td>150 zł</td>
          </tr>
          <tr>
            <td>Metoda 2D -3D</td>
            <td>180 zł</td>
            <td>160 zł</td>
          </tr>
          <tr>
            <td>Metoda 4-6D</td>
            <td>190 zł</td>
            <td>170 zł</td>
          </tr>
          <tr>
            <td>Mega Volume</td>
            <td>210 zł</td>
            <td>190 zł</td>
          </tr>
          <tr>
            <td>Lifting rzęs</td>
            <td>150zł</td>
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
            <td>BROW HENNA / Henna pudrowa</td>
            <td>60 zł</td>
          </tr>
          <tr>
            <td>Henna + regulacja</td>
            <td>30 zł</td>
          </tr>
          <tr>
            <td>Regulacja brwi (pęseta + LYCON WAX)</td>
            <td>20 zł</td>
          </tr>
          <tr>
            <td>Męska naturalna stylizacja brwi</td>
            <td>40 zł</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledOfferName>Kosmetologia pielęgnacyjna</StyledOfferName>
      <StyledTable>
        <tbody>
          <tr>
            <td>ZABIEG LARENS: "Sekret wiecznej młodości"</td>
            <td>180 zł</td>
          </tr>
          <tr>
            <td>ZABIEG LARENS: "Anti acne"</td>
            <td>180 zł</td>
          </tr>
          <tr>
            <td>ZABIEG LARENS: "Anti age"</td>
            <td>180 zł</td>
          </tr>
          <tr>
            <td>ZABIEG LARENS: "Lipo coll"</td>
            <td>180 zł</td>
          </tr>
          <tr>
            <td>ZABIEG: Peeling kawitacyjny + serum/amupłka + krem</td>
            <td>120 zł</td>
          </tr>
          <tr>
            <td>ZABIEG: Peeling kawitacyjny + serum/amupłka + maska</td>
            <td>160 zł</td>
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
      <StyledOfferName>Mezoterapia mikroigłowa</StyledOfferName>
      <StyledTable>
        <tbody>
          <tr>
            <td>Mezoterapia mikro (twarz)</td>
            <td>250 zł</td>
          </tr>
          <tr>
            <td>Mezoterapia mikro (twarz, szyja, dekolt)</td>
            <td>300 zł</td>
          </tr>
          <tr>
            <td>Estgen + sonoforeza</td>
            <td>190 zł</td>
          </tr>
          <tr>
            <td>Estgen + mezoterapia mikro (twarz)</td>
            <td>350 zł</td>
          </tr>
          <tr>
            <td>Estgen + mezoterapia mikro (twarz, szyja, dekolt)</td>
            <td>400 zł</td>
          </tr>
        </tbody>
      </StyledTable>
    </PriceListWrapper>
  );
}

export default Cennik;
