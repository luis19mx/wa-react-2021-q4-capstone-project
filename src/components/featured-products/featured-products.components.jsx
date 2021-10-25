import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';
import {
  FeaturedProductsGrid,
  FeaturedProductsStyles,
  FeaturedProductsTitle,
} from './featured-products.styles';

export default function FeaturedProducts({ products, showTitle = false, nextToSidebarStyles }) {
  return (
    <FeaturedProductsStyles nextToSidebarStyles>
      {showTitle && <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>}
      <FeaturedProductsGrid>
        {products.slice(0, 20).map(({ id, product }) => (
          <FeaturedProductsItem key={id} {...{ product }} />
        ))}
      </FeaturedProductsGrid>
    </FeaturedProductsStyles>
  );
}
