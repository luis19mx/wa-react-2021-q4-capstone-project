import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMoney } from 'utils/helpers';
import CartItem from 'components/CartItem';
import FormInput from 'components/FormatInput';
import { Button } from 'components/styles/button.styles';
import { selectCartTotal } from 'store/cart';
import { Total } from '../cart/cart.styles';
import {
  useDocumentTitle,
  useHideCartDropdownOnPageLoad,
} from 'utils/hooks';

export default function CheckoutPage() {
  useHideCartDropdownOnPageLoad();
  useDocumentTitle('Checkout');

  const { cartItems } = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    postalCode: '',
    notes: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setOrderInfo({ [name]: value });
  }

  const { name, email, postalCode, notes } = orderInfo;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Name"
          type="text"
          name="name"
          value={name}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Postal Code"
          type="text"
          name="postalCode"
          value={postalCode}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Notes"
          type="text"
          name="notes"
          value={notes}
          required
        />
        <Button type="submit">Place order</Button>
      </form>
      <div>
        <h1>Summary:</h1>
        {cartItems.map(({ id, name, price, img, quantity }) => (
          <CartItem key={id} cartItem={{ id, name, price, img, quantity }} />
        ))}
        <Total>
          <span>TOTAL: {formatMoney(cartTotal)}</span>
        </Total>
      </div>
    </div>
  );
}
