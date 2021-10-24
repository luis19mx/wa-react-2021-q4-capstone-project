import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';
import {
  FeaturedProductsGrid,
  FeaturedProductsStyles,
  FeaturedProductsTitle,
} from './featured-products.styles';

export default function FeaturedProducts({ products: _products_ }) {
  const products = _products_.results.map(({ id, data }) => ({ id, product: data }));
  return (
    <FeaturedProductsStyles>
      <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
      <FeaturedProductsGrid>
        {products.slice(0, 16).map(({ id, product }) => (
          <FeaturedProductsItem key={id} {...{ product }} />
        ))}
      </FeaturedProductsGrid>
    </FeaturedProductsStyles>
  );
}
