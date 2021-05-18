import styled from 'styled-components';
import  {useLocalStorage}  from '../utils/utils';

const InformationContainer = styled.div`
    margin: 0 auto 1rem;
    background-color: lightgray;
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .5rem;
`

const StyledButton = styled.button`
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
`

type CookiesPreferences = 'not-accepted' | 'accepted';

export const CookiesPopup = () => {
  const [accepted, setAccepted] = useLocalStorage<CookiesPreferences>(
    'cookies-accepted',
    'not-accepted',
  );

  if (accepted === 'not-accepted') {
    return (
      <InformationContainer>
        <p>
          Ta strona, tak jak praktycznie każda w internecie, wykorzystuje ciasteczka.
        </p>
        <StyledButton onClick={() => setAccepted('accepted')}>
          Rozumiem
        </StyledButton>
      </InformationContainer>
    );
  }

  return null;
};
