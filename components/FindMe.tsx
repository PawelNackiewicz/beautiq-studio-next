import styled from 'styled-components';
import Image from 'next/image';

const FindMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  margin: 0 0 1.5rem 1.5rem;
  p {
    margin: 0.1rem;
  }
`;

const LogoContainer = styled.div`
  display: none;
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    display: inline;
  }
`;

const FindMe = () => {
  return (
    <FindMeContainer>
      <InformationContainer>
        <LogoContainer>
          <Image src="/brand/logo.png" width="172" height="52" alt="logo" />
        </LogoContainer>
        <p>BeautiQ Studio</p>
        <p>Częstochowska 15</p>
        <p>46-040 Ozimek</p>
        <p>533 571 745</p>
      </InformationContainer>
      <iframe
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1264.0815897972802!2d18.217179!3d50.679796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd95450835cbf065d!2sBeautiQ%20Studio%20-%20Natalia%20Golomb!5e0!3m2!1spl!2spl!4v1591524463363!5m2!1spl!2spl"
        width="320"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        aria-hidden="false"
      />
    </FindMeContainer>
  );
};

export default FindMe;
