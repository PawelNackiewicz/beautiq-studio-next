import { useState } from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;
`;

const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.2rem;
  font-weight: normal;
  padding: 0.8em 1.2em 0.8em 1.2em;
  border-bottom: 1px solid black;
  user-select: none;
  align-items: center;

  h3 {
    margin: 0;
  }

  img {
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StyledAnswer = styled.div`
  white-space: pre-wrap;
  overflow: hidden;
  max-height: 1200px;

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
`;

const StyledAnswerClosed = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
`;

const StyledAnswerOpen = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
`;

type AccordionProps = {
  readonly question: string;
  readonly answer: string;
};

export function Accordion({ question, answer }: AccordionProps) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <StyledItem>
      <StyledQuestion onClick={() => setToggleShow(!toggleShow)}>
        <h3>{question}</h3>
        {toggleShow ? (
          <img src="/icons/up-chevron.png" alt="Close" />
        ) : (
          <img src="/icons/down-chevron.png" alt="Open" />
        )}
      </StyledQuestion>
      <StyledAnswer>
        {toggleShow ? (
          <StyledAnswerOpen>
            <span>{answer}</span>
          </StyledAnswerOpen>
        ) : (
          <StyledAnswerClosed>
            <span>{answer}</span>
          </StyledAnswerClosed>
        )}
      </StyledAnswer>
    </StyledItem>
  );
}
