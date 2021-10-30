import styled from '@emotion/styled';

export const FeaturedProductsStyles = styled.section`
  --padding: 5vh;
  padding: ${({ paddingTop }) => (paddingTop ? 'var(--padding)' : '0')} var(--padding) var(--padding);
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 40em) {
    --padding: 2vh;
    /* padding-left: 2vh;
    padding-right: 2vh; */
  }
`;
export const FeaturedProductsTitle = styled.h1`
  font-size: 3rem;

  @media (max-width: 50em) {
    font-size: 7vw;
  }
`;
export const FeaturedProductsGrid = styled.div`
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
