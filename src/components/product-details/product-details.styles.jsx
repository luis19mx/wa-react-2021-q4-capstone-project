import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import { PriceStyles as _PriceStyles_ } from '../products-item/products-item.styles';

export const ProductDetailsStyles = styled.div`
  --gutter: 2vh;
  margin: var(--gutter);

  h1 {
    margin-bottom: 0.3em;
  }
  p {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 26em) and (max-width: 49.9375) {
    text-align: center;
  }
  @media (min-width: 50em) {
    display: flex;
    position: relative;
    background-color: var(--l_grey);
    margin: 0;
    padding: var(--gutter);
    justify-content: center;

    h1 {
      text-align: center;
    }
    p {
      max-width: 77%;
    }
  }
`;
export const ColumnLeftStyles = styled.div`
  flex-basis: 66%;
  max-width: 800px;
`;
export const ColumnRightStyles = styled.div`
  flex-grow: 1;
  @media (min-width: 50em) {
    max-width: 400px;
  }
`;
export const GalleryWrapper = styled.div`
  border: 1px solid var(--l_grey);
  box-shadow: 0 var(--shadow_d) 0.66em rgba(10 10 10 / 25%);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  @media (min-width: 50em) {
    max-width: 600px;
    width: 77%;
    background-color: #fff;
    padding: 0.33em;
    box-shadow: 0 var(--shadow_d) 0.66em rgba(10 10 10 / 10%);
  }
`;
export const GalleryStyles = styled.div`
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--l_grey);
  box-shadow: inset 0 var(--shadow_d) 0.33em rgba(10 10 10 / 10%);

  .slick-dots {
    bottom: 1em;
  }
  .slick-dots li {
    width: 4vh;
    height: 4vh;
    max-width: 36px;
    max-height: 36px;
    margin-left: 1vw;
    margin-right: 1vw;
  }
`;
export const PriceStyles = styled(_PriceStyles_)`
  margin-bottom: 0;
  align-self: center;
  /* background-color: var(--l_grey); */
  padding: 0.3em;

  /* position: absolute; */
  /*
  bottom: 1vh;
  left: 3vw; */
`;
export const SkuStyles = styled.p`
  text-align: center;
  opacity: 0.66;
  font-size: smaller;
  margin-top: 0.66em;
`;
export const TagsWrapperStyles = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-content: space-evenly;
  gap: 2vw;
  margin-bottom: 1em;

  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
`;
export const TagsStyles = styled.li`
  background-color: var(--l_grey);
  padding: 0.33em 1em;
  border-radius: 0.4em;

  @media (min-width: 50em) {
    background-color: var(--grey);
    /* color: white; */
  }
`;
export const ButtonWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background-color: var(--l_grey);
  padding: 1.5vw;

  @media (max-width: 49.9375em) {
    background-color: var(--bg);
    box-shadow: 0 0 0.66em rgba(10 10 10 / 40%);
    position: fixed;
    bottom: 0;
    left: 0;
  }
  @media (min-width: 50em) {
    margin-top: 0;
    position: sticky;
    top: var(--header-height);
    box-shadow: 0 0.6em 0.2em var(--l_grey);
  }
`;
export const AddToCartStyles = styled.button`
  background-color: var(--primary);
  color: white;
  width: 100%;
  font-size: 3vh;
  font-size: min(3vh, 32px);
  padding: 0.2em 0;
  border-radius: 0.33em;
  letter-spacing: 1px;

  &:hover {
    background-color: var(--primary_d);
  }

  @media (min-width: 50em) and (max-width: 66em) {
    font-size: 2vw;
  }
`;
export const SpecsStyles = styled.div`
  /* border-top: 1px solid var(--grey); */
  margin: 2vh -2vh;
  background-color: var(--l_grey);
  padding: 2vh;
  text-align: left;

  dt {
    font-family: 'Telegraf', sans-serif;
  }
  dd {
    margin-bottom: 1em;
  }
`;
export const FooterPadding = () => (
  <Global
    styles={css`
      footer address {
        @media (max-width: 49.9375) {
          padding-bottom: 8vh;
        }
      }
    `}
  />
);
