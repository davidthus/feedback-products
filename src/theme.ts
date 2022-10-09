import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Jost, sans-serif;
  }

  body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(242, 244, 255);
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

::-webkit-scrollbar-track {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px inset;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px inset;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
`;

export const theme = {
  br: "10px",
  navy: "rgb(55, 63, 104)",
  white: "rgb(255, 255, 255)",
  moderateBlue: "rgb(70, 97, 230)",
  ghost: "rgb(242, 244, 255)",
  purple: "rgb(173, 31, 234)",
  lightBlue: "rgb(100, 113, 150)",
  black: "rgb(51, 51, 51)",
  red: "rgb(215, 55, 55)",
  orange: "rgb(244, 159, 133)",
  brightBlue: "rgb(98, 188, 250)",
};
