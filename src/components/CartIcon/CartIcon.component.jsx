import { useSelector, useDispatch } from 'react-redux';
import { toggleCartVisibility, selectCartItemsCount } from 'store/cart';
import { CartIconStyles } from './CartIcon.styles';
import { ReactComponent as ShopppingIcon } from 'assets/icons/shop.svg';

export default function CartIcon() {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <CartIconStyles onClick={() => dispatch(toggleCartVisibility())}>
      <ShopppingIcon />
      {itemsCount ? <span>{itemsCount}</span> : null}
    </CartIconStyles>
  );
}
