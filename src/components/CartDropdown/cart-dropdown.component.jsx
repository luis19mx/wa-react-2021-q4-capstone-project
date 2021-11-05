import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import { CartDropdownStyles } from './cart-dropdown.styles';

export default function CartDropdown() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <CartDropdownStyles>
      {cartItems.length ? (
        <>
          {cartItems.map(({ id, name, price, img, quantity }) => (
            <CartItem key={id} cartItem={{ id, name, price, img, quantity }} />
          ))}
          <Link to="/cart">Go to cart</Link>
        </>
      ) : (
        <p>You don't have any items yet. Go buy some!</p>
      )}
    </CartDropdownStyles>
  );
}
