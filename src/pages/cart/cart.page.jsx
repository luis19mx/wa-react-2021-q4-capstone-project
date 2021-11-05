import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CTA } from '../../components/styles';
import { useHideCartDropdownOnPageLoad } from '../../hooks';

export default function CartPage() {
  useHideCartDropdownOnPageLoad();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <h1>CartPage</h1>
      <CTA as={Link} to='/checkout'>Go to checkout</CTA>
      {cartItems.length
        ? cartItems.map(({ id, name, price, img, quantity }) => (
            <div key={id}>
              <p>{name}</p>
              <p>{price}</p>
              <p>{quantity}</p>
              <img src={img.url} alt={img.alt ? img.alt : ''} />
            </div>
          ))
        : null}
    </div>
  );
}
