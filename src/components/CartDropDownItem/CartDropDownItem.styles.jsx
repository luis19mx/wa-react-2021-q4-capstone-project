import styled from '@emotion/styled';

export const CartItemStyles = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 1em;

  img {
    width: 30%;
  }

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
  }
`;
export const CartItemNameStyles = styled.span`
  font-size: 1rem;
`;
