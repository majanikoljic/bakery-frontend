import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Quicksand:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background-color: #fff7f4;
    color: #4b2e2e;
  }

  h1, h2, h3 {
    font-family: 'Dancing Script', cursive;
    color: #d48f99;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
