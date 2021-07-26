import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyle from "./components/theme/globalStyles";

import { ThemeProvider } from "styled-components";
import ProvideThemes from "./components/theme/ProvideThemes";
const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={ProvideThemes}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  ,
  root
);


