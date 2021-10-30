import PropTypes from 'prop-types';
import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';
import {
  FeaturedProductsGrid,
  FeaturedProductsStyles,
  FeaturedProductsTitle,
} from './featured-products.styles';

function FeaturedProducts({ products, showTitle = false, paddingTopStyles = null }) {
  return (
    <FeaturedProductsStyles paddingTopStyles={paddingTopStyles}>
      {showTitle && (
        <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
      )}
      <FeaturedProductsGrid>
        {products.slice(0, 20).map(({ id, product }) => (
          <FeaturedProductsItem key={id} product={product} />
        ))}
      </FeaturedProductsGrid>
    </FeaturedProductsStyles>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  showTitle: PropTypes.bool,
  paddingTopStyles: PropTypes.bool,
};

export default FeaturedProducts;
