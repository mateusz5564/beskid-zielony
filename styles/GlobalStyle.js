import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  font-size: 62.5%;
  background-color: ${({theme}) => theme.colors.whiteGreen};
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Baloo Bhai 2';
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`;

export default GlobalStyle;
