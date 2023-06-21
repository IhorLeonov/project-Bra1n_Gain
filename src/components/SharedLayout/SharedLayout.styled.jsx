import styled from 'styled-components';
import Inter700 from "../SharedLayout/fonts/inter/Inter-Bold_700.ttf";
import Inter600 from "../SharedLayout/fonts/inter/Inter-SemiBold_600.ttf";
import Inter500 from "../SharedLayout/fonts/inter/Inter-Medium_500.ttf";
import Coolvetica from "../SharedLayout/fonts/coolvetica/CoolveticaRg-Regular.ttf";

// import { modernNormalize } from "styled-modern-normalize";



export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;

export const GlobalStyle = styled.div`

@font-face {
  font-family:"Inter-700",
  src: url(${Inter700})
}

@font-face {
  font-family:"Inter-600",
  src: url(${Inter600})
}

@font-face {
  font-family:"Inter-500",
  src: url(${Inter500})
}

@font-face {
  font-family:"Coolvetica",
  src: url(${Coolvetica})
}

:root {
  --main-acсent-blue: #3E85F3;

  // Fonts
  --main-font-color: #111111;
  --main-font-dark-theme: #FFFFFF;

  // Background
  --main-background-color: #FFFFFF;
  --background-dark-theme-sidebar: #13151A;
  --background-dark-theme: #21222C;

}
`
  
export const Button = styled.button`
  display: block;
  border-radius: 8px;
  background-color: #3E85F3;
  cursor: pointer;
  whidth: 141px;
  height: 56px;
  `;