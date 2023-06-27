import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Inter", sans-serif;
  src: local("Inter"), url("public/fonts/inter/Inter-VariableFont_slnt,wght.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  splay: swap;
}

@font-face {
  font-family: 'Coolvetica', sans-serif;
  src: local("Coolvetica"), url("public/fonts/coolvetica/CoolveticaRg-Regular.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  splay: swap;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}


:root {
  --main-font: Inter, sans-serif;
  --secondery-font: Coolvetica, sans-serif;
  --main-accent-blue: #3E85F3;

  // Fonts
  --main-font-black-color: #111111;
  --main-font-white-color: #FFFFFF;

  // Background
  --main-background-color: #FFFFFF;
  --background-dark-theme-sidebar: #13151A;
  --background-dark-theme: #21222C;
}

body {
  margin: 0;
  font-family: var(--main-font-family); 
}

button {
  display: block;
  border-radius: 8px;
  background-color: #3E85F3;
  cursor: pointer;
  width: 141px;
  height: 56px;
  padding: 0;
  border: none;
  font-family: inherit;
  background-color: var(--main-accent-color);
  color: var(--main-font-white-color);
}
`;
