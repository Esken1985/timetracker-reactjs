import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./styled/globalStyles";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "./styled/theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
