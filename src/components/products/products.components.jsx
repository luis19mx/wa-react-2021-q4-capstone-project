import PropTypes from 'prop-types';
import FeaturedProductsItem from '../featured-products-item/featured-products-item.component';
import {
  FeaturedProductsGrid,
  FeaturedProductsStyles,
  FeaturedProductsTitle,
} from './products.styles';

function Products({ products, showTitle, paddingTopStyles = null }) {
  return (
    <FeaturedProductsStyles paddingTopStyles={paddingTopStyles}>
      {showTitle && (
        <FeaturedProductsTitle>Featured Products</FeaturedProductsTitle>
      )}
      <FeaturedProductsGrid>
        {products?.length
          ? products.map(({ id, product }) => (
              <FeaturedProductsItem key={id} product={product} />
            ))
          : null}
      </FeaturedProductsGrid>
    </FeaturedProductsStyles>
  );
}

Products.propTypes = {
  productsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  showTitle: PropTypes.bool,
  ptStyles: PropTypes.bool,
};

Products.defaultProps = {
  productsData: [],
};

export default Products;
