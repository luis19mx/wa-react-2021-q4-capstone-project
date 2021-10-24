/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Footer() {
  return (
    <footer
      css={css`
        margin-top: 5vh;
        margin-left: 5vh;
        margin-right: 5vh;
        padding-top: 2vh;
        padding-bottom: 2vh;
        display: flex;
        justify-content: center;
        opacity: 0.5;
        text-align: center;
        border-top: 1px solid;
      `}
    >
      <address>Ecommerce created during Wizeline’s Academy React Bootcamp.</address>
      &emsp;
      {/* <p>Created by Luis Lasso {new Date().getFullYear()}</p> */}
    </footer>
  );
}
