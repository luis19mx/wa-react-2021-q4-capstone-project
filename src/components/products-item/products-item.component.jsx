import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { formatMoney } from '../../utils';
import AddToCart from '../add-to-cart/add-to-cart.component';
import {
  ProductsItemStyles,
  CategoryStyles,
  ContentStyles,
  ImageStyles,
  PriceStyles,
  TitleStyles,
} from './products-item.styles';

function ProductsItem({ product }) {
  const history = useHistory();

  const {
    id,
    name,
    price,
    mainimage: img,
    category: { slug: category },
  } = product;

  const handleNavigation = () => {
    return history.push({
      pathname: `/product/${id}`,
    });
  };

  return (
    <ProductsItemStyles onClick={handleNavigation}>
      <ImageStyles src={img.url} alt={img.alt} />
      <ContentStyles>
        <TitleStyles>{name}</TitleStyles>
        <PriceStyles>{formatMoney(price)}</PriceStyles>
        <CategoryStyles>{category}</CategoryStyles>
        <AddToCart product={{ id, name, price, img }} bubbles={false} />
      </ContentStyles>
    </ProductsItemStyles>
  );
}

ProductsItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsItem;
