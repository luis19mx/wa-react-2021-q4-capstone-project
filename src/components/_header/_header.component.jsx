import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchProducts from 'components/SearchProducts';
import CartDropdown from 'components/CartDropdown';
import CartIcon from 'components/CartIcon';
import { FlexStyles, HeaderStyles, LogoStyles } from './_header.styles';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Header() {
  const { cartIsHidden } = useSelector((state) => state.cart);

  return (
    <HeaderStyles data-testid="header">
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
