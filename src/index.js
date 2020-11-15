import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { rootReducer, loadFromLocalStorage, saveToLocalStorage } from "./redux/reducers/rootReducer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import GlobalStyles from "./styled/globalStyles";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "./styled/theme";


const persistedState = loadFromLocalStorage()
const store = createStore(rootReducer, persistedState);
store.subscribe(() => saveToLocalStorage(store.getState()))
// localStorage.clear()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
