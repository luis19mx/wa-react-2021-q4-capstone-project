import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../utils';
import {
  ProductsItemStyles,
  CategoryStyles,
  ContentStyles,
  ImageStyles,
  PriceStyles,
  TitleStyles,
} from './products-item.styles';

function ProductsItem({ product }) {
  const {
    mainimage: img,
    name,
    category: { slug: category },
    price,
    id: productId,
  } = product;

  return (
    <ProductsItemStyles as={Link} to={`/product/${productId}`}>
      <ImageStyles src={img.url} alt={img.alt} />
      <ContentStyles>
        <TitleStyles>{name}</TitleStyles>
        <PriceStyles>{formatMoney(price)}</PriceStyles>
        <CategoryStyles>{category}</CategoryStyles>
      </ContentStyles>
    </ProductsItemStyles>
  );
}

ProductsItem.propTypes = {
  product: PropTypes.shape({
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsItem;
