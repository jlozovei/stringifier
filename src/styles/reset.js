import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, ol{
    padding: 0;

    li{
      list-style: none;
    }
  }

  a{
    color: #3e3ca7;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default GlobalStyle;
