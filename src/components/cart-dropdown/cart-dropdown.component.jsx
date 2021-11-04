import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartDropdownStyles } from './cart-dropdown.styles';
// import { CTA } from '../styles/button.styles';

export default function CartDropdown() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <CartDropdownStyles>
      {cartItems.length ? (
        <>
          {cartItems.map(({ id, name, price, img }) => (
            <div key={id}>{name}</div>
          ))}
          <Link to="/cart">Go to cart</Link>
        </>
      ) : (
        <p>You don't have any items yet. Go buy some!</p>
      )}
      {/* <CTA>Go to checkout</CTA> */}
    </CartDropdownStyles>
  );
}
