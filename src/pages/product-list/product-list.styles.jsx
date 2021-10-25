import styled from '@emotion/styled';

export const ProductListPageStyles = styled.div`
  h1 {
    text-align: center;
    margin-top: 1.4em;
    margin-bottom: 1.4em;

    @media(max-width: 25em) {
      padding-left: 2vw;
      padding-right: 2vw;
    }
  }
`;
export const FlexStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContentStyles = styled.div`
  min-width: 72%;
  flex-grow: 666;
  flex-basis: 0;
`;
