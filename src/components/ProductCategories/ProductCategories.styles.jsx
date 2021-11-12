import styled from '@emotion/styled';

export const ProductCategoriesStyles = styled.section`
  background-color: #fff;
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: grid;
  grid-template-areas:
    'one two three'
    'four four three'
    'four four five';
  grid-template-rows: repeat(3, minmax(160px, 20vh));
  grid-gap: 2em;
  padding: 5vh;

  @media (max-width: 50em) {
    grid-template-areas:
      'one'
      'two'
      'three'
      'four'
      'five';
    grid-template-rows: repeat(auto-fill, 40vh);
    font-size: 4vw;
  }
  @media (max-width: 40em) {
    padding-left: 2vh;
    padding-right: 2vh;
  }

  & div:nth-of-type(1) {
    grid-area: one;
  }
  & div:nth-of-type(2) {
    grid-area: two;
  }
  & div:nth-of-type(3) {
    grid-area: three;
  }
  & div:nth-of-type(4) {
    grid-area: four;
  }
  & div:nth-of-type(5) {
    grid-area: five;
  }
`;
