import PropTypes from 'prop-types';
import ProductCategoriesItem from '../product-categories-item/product-categories-item.component';
import { ProductCategoriesStyles } from './product-categories.styles';

function ProductCategories({ categories }) {
  return (
    <ProductCategoriesStyles>
      {categories?.length &&
        categories.map(({ id, category }) => (
          <ProductCategoriesItem key={id} category={category} />
        ))}
    </ProductCategoriesStyles>
  );
}

ProductCategories.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductCategories.defaultProps = {
  categoriesData: [],
};

export default ProductCategories;
