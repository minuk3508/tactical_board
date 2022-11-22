import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyle from "./Style/GlobalStyle";
import theme from "./Style/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
