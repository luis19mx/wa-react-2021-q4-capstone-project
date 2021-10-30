import { FlexStyles, HeaderStyles, LogoStyles, SearchStyles, ShopppingIconStyles } from './header.styles';
import { ReactComponent as ShopppingIcon } from '../../assets/icons/shop.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header({ setIsHomePageActive }) {
  return (
    <HeaderStyles>
      <LogoStyles>
        <a href='/' onClick={(evt) => evt.preventDefault() || setIsHomePageActive(true)}>
          <Logo />
        </a>
      </LogoStyles>
      <FlexStyles className='right'>
        <SearchStyles>
          <SearchIcon />
          <input type='search' placeholder='search…' />
        </SearchStyles>
        <ShopppingIconStyles as={ShopppingIcon} />
      </FlexStyles>
    </HeaderStyles>
  );
}
