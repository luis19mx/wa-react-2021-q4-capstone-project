import styled from '@emotion/styled';

export const ProductsStyles = styled.section`
  --padding: 5vh;
  padding-top: ${({ paddingTopStyles }) => {
    return paddingTopStyles ? 'var(--padding)' : '0';
  }};
  padding-left: var(--padding);
  padding-right: var(--padding);
  padding-bottom: var(--padding);
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 40em) {
    --padding: 2vh;
  }
`;
export const ProductsTitle = styled.h1`
  font-size: 3rem;

  @media (max-width: 50em) {
    font-size: 7vw;
  }
`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;

  @media (max-width: 78em) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media (max-width: 40em) {
    grid-gap: 2vh;
  }
`;
