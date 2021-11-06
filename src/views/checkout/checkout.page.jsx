import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDocumentTitle, useHideCartDropdownOnPageLoad } from 'utils/hooks';
import { formatMoney } from 'utils/helpers';
import CartItem from 'components/CartItem';
import { Input, Textarea } from 'components/forms';
import { Button } from 'components/styles/button.styles';
import { selectCartTotal } from 'store/cart';
import { Total } from '../cart/cart.styles';

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
        <Input
          onChange={handleChange}
          label="Name"
          type="text"
          name="name"
          value={name}
          required
        />
        <Input
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <Input
          onChange={handleChange}
          label="Postal Code"
          type="text"
          name="postalCode"
          value={postalCode}
          required
        />
        <Textarea
          onChange={handleChange}
          label="Notes"
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
