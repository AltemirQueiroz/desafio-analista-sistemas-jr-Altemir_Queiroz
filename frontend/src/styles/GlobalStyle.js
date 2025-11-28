import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, Arial;
    background: linear-gradient(180deg,#f6f9fc 0%, #eef4fb 100%);
    color: #102a43;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  button { font-family: inherit; }

  a { color: inherit; text-decoration: none; }
`;

export default GlobalStyle;
