import styled from '@emotion/styled';

export const CheckoutPageStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5vh 0;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    width: 100%;
    margin-bottom: 0;
  }

  button[type='submit'] {
    width: 100%;
    max-width: 300px;
    float: right;
  }
`;
export const ColumnStyles = styled.div`
  width: 46%;
  min-width: 300px;

  > div:first-of-type {
    margin: 0.22em 0 0.88em;
  }
`;
