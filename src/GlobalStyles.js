import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.text.primary};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .app-main-content {
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;

    ${(props) => props.theme.breakpoints.up("sm")} {
      padding-top: 96px;
      padding-bottom: 96px;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;

export default GlobalStyles;
