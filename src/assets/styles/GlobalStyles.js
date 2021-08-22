import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');

  :root {
    /* COLORS */
    --pale-blue: hsl(225, 100%, 94%);
    --bright-blue: hsl(245, 75%, 52%);
    --very-pale-blue: hsl(225, 100%, 98%);
    --desaturated-blue: hsl(224, 23%, 55%);
    --dark-blue: hsl(223, 47%, 23%);

    /* FONTS */
    --font-family: 'Red Hat Display', sans-serif;
    --font-weight-500: 500;
    --font-weight-700: 700;
    --font-weight-900: 900;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: var(---font-family);
  }

  h1, h3 {
    font-weight: var(--font-weight-700);
  }

  p, span {
    font-weight: var(---font-weight-500);
  }

  ul li {
    list-style: none;
  }

  a {
    font-weight: var(--font-weight-700);
  }

  button {
    font-weight: var(---font-weight-900);
  }
`
