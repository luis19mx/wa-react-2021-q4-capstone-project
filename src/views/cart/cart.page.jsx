import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartTotal } from 'store/cart';
import {
  useCartEmptyRedirect,
  useDocumentTitle,
  useHideCartDropdownOnPageLoad,
} from 'utils/hooks';
import { formatMoney } from 'utils/helpers';
import CartItem from 'components/CartItem';
import { CTA } from 'components/styles';
import { CartPageStyles, Total, CartHeader, TopRow } from './cart.styles';

export default function CartPage() {
  useDocumentTitle('Your cart');
  useHideCartDropdownOnPageLoad();
  useCartEmptyRedirect();

  const { cartItems } = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CartPageStyles>
      <TopRow>
        {!!cartTotal ? (
          <CTA as={Link} to="/checkout">
            Go to checkout
          </CTA>
        ) : null}
        <Total>
          <span>TOTAL: {formatMoney(cartTotal)}</span>
        </Total>
      </TopRow>
      <CartHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CartHeader>
      {cartItems.map(({ id, name, price, img, quantity }) => (
        <CartItem
          key={id}
          enableEdition={true}
          cartItem={{ id, name, price, img, quantity }}
        />
      ))}
    </CartPageStyles>
  );
}
