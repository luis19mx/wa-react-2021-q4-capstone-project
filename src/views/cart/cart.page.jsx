import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartTotal } from 'store/cart';
import { useDocumentTitle, useHideCartDropdownOnPageLoad } from 'utils/hooks';
import { formatMoney } from 'utils/helpers';
import CartItem from 'components/CartItem';
import { CTA } from 'components/styles';
import { CartPageStyles, Total, CartHeader, FlexRow } from './cart.styles';
import { useEffect } from 'react';

export default function CartPage() {
  useHideCartDropdownOnPageLoad();
  useDocumentTitle('Your cart');

  const { cartItems } = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);
  const history = useHistory();

  useEffect(() => {
    if (!cartItems?.length) {
      history.push('/products');
    }
  }, [cartItems, history]);

  return (
    <CartPageStyles>
      <FlexRow>
        {!!cartTotal ? (
          <CTA as={Link} to="/checkout">
            Go to checkout
          </CTA>
        ) : null}
        <Total>
          <span>TOTAL: {formatMoney(cartTotal)}</span>
        </Total>
      </FlexRow>
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
        <CartItem key={id} cartItem={{ id, name, price, img, quantity }} />
      ))}
    </CartPageStyles>
  );
}
