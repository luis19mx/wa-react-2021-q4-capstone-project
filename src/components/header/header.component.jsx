import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchProducts from '../SearchProducts';
import CartDropdown from '../CartDropdown';
import CartIcon from '../CartIcon';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  FlexStyles,
  HeaderStyles,
  LogoStyles,
} from './header.styles';

export default function Header() {
  const { cartIsHidden } = useSelector((state) => state.cart);

  return (
    <HeaderStyles>
      <LogoStyles>
        <Link to="/">
          <Logo />
        </Link>
      </LogoStyles>
      <FlexStyles>
        <SearchProducts />
        <CartIcon />
      </FlexStyles>
      {!cartIsHidden ? <CartDropdown /> : null}
    </HeaderStyles>
  );
}
