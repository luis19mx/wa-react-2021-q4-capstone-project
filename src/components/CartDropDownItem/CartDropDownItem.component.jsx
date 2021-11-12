import PropTypes from 'prop-types';
import { CartItemStyles, CartItemNameStyles } from './CartDropDownItem.styles';

function CartDropDownItem({ cartItem }) {
  const { name, price, img, quantity } = cartItem;

  return cartItem ? (
    <CartItemStyles>
      <img src={img.url} alt={img.alt ? img.alt : ''} />
      <div>
        <CartItemNameStyles>{name}</CartItemNameStyles>
        <span>
          {quantity} &times; ${price}
        </span>
      </div>
    </CartItemStyles>
  ) : null;
}

CartDropDownItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

CartDropDownItem.defaultProps = {
  name: '',
  price: 0,
  img: {
    url: '',
  },
  quantity: 0,
};

export default CartDropDownItem;
