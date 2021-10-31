import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ProductCategoriesItemStyles,
  ImageStyles,
  TitleStyles,
} from './product-categories-item.styles';

function ProductCategoriesItem({ category }) {
  const { main_image: img, name } = category;
  return (
    <ProductCategoriesItemStyles
      as={Link}
      to={`/products?category=${encodeURIComponent(name)}`}
    >
      <ImageStyles src={img.url} alt={img.alt || ''} />
      <TitleStyles>{name}</TitleStyles>
    </ProductCategoriesItemStyles>
  );
}

ProductCategoriesItem.propTypes = {
  category: PropTypes.shape({
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
  }),
};

export default ProductCategoriesItem;
