import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShopppingIcon } from '../../assets/icons/shop.svg';
import { toggleCartVisibility, selectCartItemsCount } from '../../redux/cart';
// import { ShopppingIconStyles } from '../header/header.styles';
import { CartIconStyles } from './cart-icon.styles';

export default function CartIcon() {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <CartIconStyles onClick={() => dispatch(toggleCartVisibility)}>
      <ShopppingIcon />
      {itemsCount ? <span>{itemsCount}</span> : null}
    </CartIconStyles>
  );
}
