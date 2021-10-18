import { Global } from '@emotion/react';
import CssModernReset from './CssModernReset';
import CssScaffolding from './CssScaffolding';

export default function GlobalStyles() {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
    </>
  )
}