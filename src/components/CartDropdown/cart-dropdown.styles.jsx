import styled from '@emotion/styled';

export const CartDropdownStyles = styled.div`
  position: absolute;
  right: var(--gutter);
  top: calc(var(--header-height) + 1em);
  background-color: #fff;
  border: 1px solid hsl(0, 0%, 80%);
  box-shadow: 0 0.4em 0.6em rgba(0, 0, 0, 0.08);
  border-radius: 0.8em;
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 1em;

  > div {
    height: 280px;
    overflow: scroll;

    div:last-of-type {
      margin-bottom: 0.5em;
    }
  }
`;
export const CartDropdownButton = styled.a`
  background-color: var(--primary);
  color: white;
  font-size: 1.3rem;
  width: 100%;
  padding: 0.5em 0;
  border-radius: 0.4em;
  text-align: center;
  box-shadow: 0 -1em 1em white;
  position: relative;

  &:hover {
    background-color: var(--primary_d);
  }
`;
