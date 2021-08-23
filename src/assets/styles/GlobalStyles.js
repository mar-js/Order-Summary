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
    height: 100vh;
    font-size: 10px;
  }

  body {
    height: 100%;
    font-family: var(--font-family);
    background-color: var(--pale-blue);
  }

  #root {
    height: 100%;
    background: no-repeat center / cover  url('../../assets/images/pattern-background-mobile.svg');

    @media(min-width: 37.5rem) {
      background: no-repeat center / cover url('../../assets/images/pattern-background-desktop.svg')
    }
  }

  h1 {
    font-weight: var(--font-weight-900);
  }

  h3 {
    font-weight: var(--font-weight-700);
  }

  p, span {
    font-weight: var(--font-weight-500);
  }

  ul li {
    list-style: none;
  }

  a {
    font-weight: var(--font-weight-700);
  }

  button {
    cursor: pointer;
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem 0;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-weight: var(--font-weight-900);
  }
`
