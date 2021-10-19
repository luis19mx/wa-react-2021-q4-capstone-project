/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as ShopppingIcon } from '../../assets/images/icon.shop.svg';

export default function Header() {
  return (
    <header
      css={css`
        --gutter: 2vw;
        display: flex;
        justify-content: space-between;
        padding-left: var(--gutter);
        padding-right: var(--gutter);
      `}
    >
      <h1>LOGO</h1>
      <div
        className='right'
        css={css`
          display: flex;
          align-items: center;
          gap: var(--gutter);

          input {
            width: 30vw;
            min-width: 200px;
          }
        `}
      >
        <input type='search' placeholder='search…' />
        <ShopppingIcon />
      </div>
    </header>
  );
}
