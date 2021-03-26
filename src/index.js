import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { PersistGate } from "redux-persist/integration/react";
import Barra_nav from "./components/Barra_nav";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    
    box-sizing: borde r-box;
    transition: all 0.5s ease-in;
  }
  body {
    margin: 80px;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Barra_nav />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function(e) {
  console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
