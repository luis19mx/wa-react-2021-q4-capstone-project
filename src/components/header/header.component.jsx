import { Link } from 'react-router-dom';

import SearchProducts from '../search-products/search-products.component';
import { FlexStyles, HeaderStyles, LogoStyles, ShopppingIconStyles } from './header.styles';
import { ReactComponent as ShopppingIcon } from '../../assets/icons/shop.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <HeaderStyles>
      <LogoStyles>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoStyles>
      <FlexStyles className='right'>
        <SearchProducts />
        <ShopppingIconStyles as={ShopppingIcon} />
      </FlexStyles>
    </HeaderStyles>
  );
}
