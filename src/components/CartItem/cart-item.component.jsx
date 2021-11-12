import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from 'store/cart';
import { formatMoney } from 'utils/helpers';
import {
  CartItemStyles,
  ImageStyles,
  NameStyles,
  QuantityWrapperStyles,
  QuantityStyles,
  ArrowStyles,
  PriceStyles,
  RemoveStyles,
} from './cart-item.styles';

function CartItem({ cartItem, enableEdition = false }) {
  const { name, price, img, quantity } = cartItem;
  const dispatch = useDispatch();

  const handleItemDecrease = () => dispatch(decreaseItemQuantity(cartItem));
  const handleItemIncrease = () => dispatch(increaseItemQuantity(cartItem));

  return cartItem ? (
    <CartItemStyles>
      <ImageStyles>
        <img src={img.url} alt={img.alt ? img.alt : ''} />
      </ImageStyles>
      <NameStyles>
        <span>{name}</span>
      </NameStyles>
      {enableEdition ? (
        <QuantityWrapperStyles>
          <ArrowStyles onClick={handleItemDecrease}>&#10094;</ArrowStyles>
          <QuantityStyles>{quantity}</QuantityStyles>
          <ArrowStyles onClick={handleItemIncrease}>&#10095;</ArrowStyles>
        </QuantityWrapperStyles>
      ) : (
        <QuantityStyles>{quantity}</QuantityStyles>
      )}
      <PriceStyles>{formatMoney(price)}</PriceStyles>
      {enableEdition ? (
        <RemoveStyles onClick={() => dispatch(removeItem(cartItem))}>
          &#10005;
        </RemoveStyles>
      ) : null}
    </CartItemStyles>
  ) : null;
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

CartItem.defaultProps = {
  name: '',
  price: 0,
  img: {
    url: '',
  },
  quantity: 0,
};

export default CartItem;
