import PropTypes from 'prop-types';
import ProductsItem from 'components/ProductsItem';
import { ProductsGrid, ProductsStyles, ProductsTitle } from './_products.styles';

function Products({ products, showTitle, paddingTopStyles }) {
  return (
    <ProductsStyles paddingTopStyles={paddingTopStyles}>
      {showTitle && <ProductsTitle>Featured Products</ProductsTitle>}
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
  showTitle: PropTypes.bool,
  ptStyles: PropTypes.bool,
};

Products.defaultProps = {
  products: [],
};

export default Products;
