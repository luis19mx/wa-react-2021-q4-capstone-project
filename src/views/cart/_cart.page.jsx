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
import { CTA, Total } from 'components/styles';
import { CartPageStyles, CartHeader, TopRow } from './_cart.styles';

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
          <span>
            TOTAL:{' '}
            <span data-testid="cart-total">{formatMoney(cartTotal)}</span>
          </span>
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
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} enableEdition={true} cartItem={cartItem} />
      ))}
    </CartPageStyles>
  );
}
