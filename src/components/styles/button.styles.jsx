import styled from '@emotion/styled';

export const Button = styled.a`
  background-color: var(--primary);
  white-space: nowrap;
  cursor: pointer;
  color: white;
  border-radius: 0.33em;
  padding: 0.3em 1em;
  display: block;
  font-size: 1.2rem;

  &:hover {
    background-color: var(--primary_d);
  }
`;
export const CTA = styled(Button)`
  font-size: 3vh;
  font-size: min(3vh, 32px);
  padding: 0.2em 0;
  letter-spacing: 1px;
  text-align: center;

  margin: 3vh auto 6vh;
  max-width: 600px;
  width: 80%;

  @media (max-width: 28em) {
    width: calc(100% - 3vw);
  }
`;
