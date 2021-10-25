import PropTypes from 'prop-types';
import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';
import {
  FeaturedProductsGrid,
  FeaturedProductsStyles,
  FeaturedProductsTitle,
} from './featured-products.styles';

function FeaturedProducts({ products, showTitle = false, paddingTop }) {
  return (
    <FeaturedProductsStyles {...{ paddingTop }}>
      {showTitle && <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>}
      <FeaturedProductsGrid>
        {products.slice(0, 20).map(({ id, product }) => (
          <FeaturedProductsItem key={id} {...{ product }} />
        ))}
      </FeaturedProductsGrid>
    </FeaturedProductsStyles>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  showTitle: PropTypes.bool,
  paddingTop: PropTypes.bool,
};

export default FeaturedProducts;
