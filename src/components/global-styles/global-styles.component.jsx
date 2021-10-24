/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import CssModernReset from '../../styles/CssModernReset';
import CssScaffolding from '../../styles/CssScaffolding';

export default function GlobalStyles() {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
    </>
  )
}