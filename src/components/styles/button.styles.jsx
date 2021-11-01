import styled from '@emotion/styled';

export const Button = styled.a`
  white-space: nowrap;
  cursor: pointer;
  background-color: var(--primary);
  border-radius: 2em;
  padding: 0.3em 1em;
  color: white;
  display: block;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;
export const CTA = styled(Button)`
  margin: 3vh auto 6vh;
  max-width: 600px;
  text-align: center;
  width: 80%;

  background-color: var(--primary);
  color: white;
  font-size: 3vh;
  font-size: min(3vh, 32px);
  padding: 0.2em 0;
  border-radius: 0.33em;
  letter-spacing: 1px;

  &:hover {
    opacity: 1;
    background-color: var(--primary_d);
  }

  @media (max-width: 28em) {
    width: calc(100% - 3vw);
  }
`;
