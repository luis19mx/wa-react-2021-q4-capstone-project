/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import featuredProducts from '../../data/featured-products.json';
import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';

export default function FeaturedProducts() {
  const products = featuredProducts.results.map(({ id, data }) => ({ id, product: data }));
  return (
    <section
      css={css`
        padding: 5vh;
        max-width: 100rem;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 40em) {
          padding-left: 2vh;
          padding-right: 2vh;
        }
      `}
    >
      <h1
        css={css`
          font-size: 3rem;

          @media (max-width: 50em) {
            font-size: 7vw;
          }
        `}
      >
        Featured Products
      </h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 2em;

          @media (max-width: 78em) {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          }
          @media (max-width: 40em) {
            grid-gap: 2vh;
          }
        `}
      >
        {products.slice(0, 16).map(({ id, product }) => (
          <FeaturedProductsItem key={id} {...{ product }} />
        ))}
      </div>
    </section>
  );
}
