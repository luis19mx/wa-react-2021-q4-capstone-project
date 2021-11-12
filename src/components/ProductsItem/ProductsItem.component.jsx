import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { formatMoney } from 'utils/helpers';
import AddToCart from 'components/AddToCart';
import { CategoryStyles } from 'components/styles';
import { PriceStyles } from 'components/styles';
import {
  ProductsItemStyles,
  ContentStyles,
  ImageStyles,
  TitleStyles,
  AddToCartWrapper,
  addToCartStyles,
} from './ProductsItem.styles';

function ProductsItem({ product }) {
  const history = useHistory();

  const {
    id,
    name,
    price,
    mainimage: img,
    category: { slug: category },
    stock,
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
        <AddToCartWrapper data-cart>
          {stock ? (
            <AddToCart
              ctaStyles={addToCartStyles}
              product={{ id, name, price, img }}
              bubbles={false}
            />
          ) : (
            <p>Out of Stock</p>
          )}
        </AddToCartWrapper>
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
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsItem;
