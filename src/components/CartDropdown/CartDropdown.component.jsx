import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDropDownItem from 'components/CartDropDownItem';
import { CartDropdownButton, CartDropdownStyles } from './CartDropdown.styles';

export default function CartDropdown() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <CartDropdownStyles>
      {cartItems?.length ? (
        <>
          <div>
            {cartItems.map(({ id, name, price, img, quantity }) => (
              <CartDropDownItem
                key={id}
                cartItem={{ id, name, price, img, quantity }}
              />
            ))}
          </div>
          <CartDropdownButton as={Link} to="/cart">
            Go to cart
          </CartDropdownButton>
        </>
      ) : (
        <p>
          You don't have any items yet. <br />
          Go buy some!
        </p>
      )}
    </CartDropdownStyles>
  );
}
