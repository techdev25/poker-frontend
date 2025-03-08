import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./context/Providers";

import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  rootElement
);
