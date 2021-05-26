import styled from 'styled-components';
import { useLocalStorage } from '../utils/utils';

const InformationContainer = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;

  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  z-index: 10;
  box-shadow: 0 0 8px 2px #000;

  @media screen and (min-width: 45em) {
    left: 1rem;
    bottom: 2rem;
    max-width: 20rem;
    border-radius: 5px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  cursor: pointer;
`;

type CookiesPreferences = 'not-accepted' | 'accepted';

export const CookiesPopup = () => {
  const [accepted, setAccepted] = useLocalStorage<CookiesPreferences>(
    'cookies-accepted',
    'not-accepted',
  );

  if (accepted === 'not-accepted') {
    return (
      <InformationContainer>
        <p>Strona wykorzystuje ciasteczka aby podnieść jakość świadczonych usług.</p>
        <StyledButton onClick={() => setAccepted('accepted')}>Rozumiem</StyledButton>
      </InformationContainer>
    );
  }

  return null;
};
