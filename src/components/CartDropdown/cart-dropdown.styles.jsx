import styled from '@emotion/styled';

export const CartDropdownStyles = styled.div`
  position: absolute;
  right: var(--gutter);
  top: var(--header-height);
  background-color: #fff;
  border: 1px solid var(--grey);

  width: 300px;
  /* height: 340px; */
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
  width: 100%;
  padding: 0.8em 1em;
  text-align: center;
  box-shadow: 0 -1em 1em white;
  position: relative;
`;
