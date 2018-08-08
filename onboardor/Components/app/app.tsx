import { Resolver } from "found-relay";
import React from "react";
import { Provider } from "react-redux";
import { Provider as RebassProvider } from "rebass";
import { injectGlobal } from "styled-components";

import environment from "./environment/environment";
import Router from "./routing/router";
import store from "./store/store";

/* tslint:disable no-unused-expression */
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100%; height: 100%; }
  #app { height: inherit; > div { height: 100%; } }
  html { height: 100%; }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none;margin: 0; padding: 0; }
  li { list-style: none }
  button { border: 0; padding: 0; font: inherit; outline: none; cursor: pointer; }
  svg { fill: #4A4A4A; }
`;
/* tslint:enable no-unused-expression */

const resolver = new Resolver(environment);

const App = () => (
  <Provider store={store}>
    <RebassProvider
      theme={{
        fonts: {
          sans: "Montserrat, sans-serif",
        },
        breakpoints: [
          768,
          992,
          1200
        ],
        fontWeights: {
          normal: 400,
          bold: 600
        },
        colors: {
          darkGrey: "#212121",
          error: "#ff3b3b",
          grey: "#4A4A4A",
          lightGrey: "#737373",
          primary: "#43cea2",
          primary2: "#2fdbab",
          secondary: "#3d9dff"
        }
      }}
    >
      <Router matchContext={{ store }} resolver={resolver} />
    </RebassProvider>
  </Provider>
);

export default App;
