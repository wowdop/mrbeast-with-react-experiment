import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  /* https://rsms.me/inter/inter.css */
  /* https://github.com/rsms/inter */
  /* load inter var font */
  @font-face {
    font-family: 'Inter var';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/font/Inter-roman.var.woff2?v=3.19') format('woff2');
    font-named-instance: 'Regular';
  }

  @font-face {
    font-family: 'Inter var';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url('/font/Inter-italic.var.woff2?v=3.19') format('woff2');
    font-named-instance: 'Italic';
  }

  /* reset */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Inter var';
  }
  
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    /* cursor: none !important; */
  }

`

const style = { Global }

export default style
