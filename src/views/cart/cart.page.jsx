import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartTotal } from '../../store/cart';
import { formatMoney } from '../../utils/helpers';
import CartItem from '../../components/CartItem';
import { CartPageStyles, Total } from './cart.styles';
import { CTA } from '../../components/styles';
import {
  useDocumentTitle,
  useHideCartDropdownOnPageLoad,
} from '../../utils/hooks';

export default function CartPage() {
  useHideCartDropdownOnPageLoad();
  useDocumentTitle('Your cart');

  const { cartItems } = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CartPageStyles>
      <CTA as={Link} to="/checkout">
        Go to checkout
      </CTA>
      {cartItems.map(({ id, name, price, img, quantity }) => (
        <CartItem key={id} cartItem={{ id, name, price, img, quantity }} />
      ))}
      <Total>
        <span>TOTAL: {formatMoney(cartTotal)}</span>
      </Total>
    </CartPageStyles>
  );
}
