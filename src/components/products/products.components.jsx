import PropTypes from 'prop-types';
import ProductsItem from 'components/ProductsItem';
import { ProductsGrid, ProductsStyles, FeaturedTitleStyles } from './Products.styles';

function Products({ products, featured = false, paddingTopStyles }) {
  return (
    <ProductsStyles paddingTopStyles={paddingTopStyles}>
      {featured ? <FeaturedTitleStyles>Featured Products</FeaturedTitleStyles> : null}
      <ProductsGrid>
        {products?.length
          ? products.map(({ id, product }) => (
              <ProductsItem key={id} product={{ ...product, id }} />
            ))
          : null}
      </ProductsGrid>
    </ProductsStyles>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  featured: PropTypes.bool,
  ptStyles: PropTypes.bool,
};

Products.defaultProps = {
  products: [],
  featured: false,
};

export default Products;
