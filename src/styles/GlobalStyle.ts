// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components'
import { media } from '@/styles/media'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  ${media.sm} {
    html {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Alata', sans-serif;
    background-color: var(--color-brand-primary);
    color: white;
  }
`
