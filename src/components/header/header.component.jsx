/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as ShopppingIcon } from '../../assets/icons/shop.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: var(--gutter);
        padding-right: var(--gutter);
        height: var(--header-height);
        box-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.04);
        background-color: #fff;
        position: fixed;
        width: 100%;
        z-index: 10;
      `}
    >
      <h1
        css={css`
          margin-top: 0;
          margin-bottom: 0;
        `}
      >
        <a href='/' onClick={(evt) => evt.preventDefault()}>
          <Logo />
        </a>
      </h1>
      <div
        className='right'
        css={css`
          display: flex;
          align-items: center;
          gap: var(--gutter);
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            position: relative;

            svg {
              position: absolute;
              height: 80%;
              left: 0.4em;
              opacity: 0.3;
            }
            input {
              width: 30vw;
              min-width: 200px;
              padding-left: 2.2em;
              border-radius: 4em;
            }

            @media (max-width: 40em) {
              width: 32px;
              overflow: hidden;

              input {
                border-color: transparent;
              }
              svg {
                opacity: 1;
              }
            }
          `}
        >
          <SearchIcon />
          <input type='search' placeholder='search…' />
        </div>
        <ShopppingIcon
          css={css`
            height: 32px;
            cursor: pointer;
          `}
        />
      </div>
    </header>
  );
}
