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
  margin: auto;
  width: 90%;
  max-width: 200px;
  text-align: center;
`;
