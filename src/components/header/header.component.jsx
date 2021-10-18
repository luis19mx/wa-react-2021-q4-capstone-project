/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
        `}
      >
        <input type='search' placeholder='search…' />
        <p>icon</p>
      </div>
    </header>
  );
}
