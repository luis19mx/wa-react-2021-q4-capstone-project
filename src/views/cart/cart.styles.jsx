import styled from '@emotion/styled';

export const CartPageStyles = styled.div`
  max-width: 56rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  /* padding: 3vh; */

  button {
    margin-left: auto;
    margin-top: 3rem;
  }
`;
export const CartHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  > div {
    width: 22%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;

    :last-child {
      width: auto;
      flex-grow: 1;
    }
  }
`;
export const Total = styled.div`
  font-size: 36px;
`;
export const TopRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4vh;
  width: 100%;
  padding: 1vh 0;
  position: sticky;
  top: var(--header-height);
  background-color: var(--bg);

  a {
    width: 40%;
    margin: 0;
  }
`;
