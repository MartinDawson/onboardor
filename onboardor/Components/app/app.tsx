import { Resolver } from "found-relay";
import React from "react";
import { Provider } from "react-redux";
import { Provider as RebassProvider } from "rebass";
import { injectGlobal } from "styled-components";

import environment from "./environment/environment";
import Router from "./routing/router";
import store from "./store/store";
import theme from "../shared/utilities/theme";

/* tslint:disable no-unused-expression */
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100%; height: 100%; }
  #app { height: inherit; > div { height: 100%; } }
  html { height: 100%; }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; margin: 0; padding: 0; }
  li { list-style: none }
  button { border: 0; padding: 0; font: inherit; outline: none; cursor: pointer; }
  svg { fill: #4A4A4A; }
`;
/* tslint:enable no-unused-expression */

const resolver = new Resolver(environment);

const App = () => (
  <Provider store={store}>
    <RebassProvider
      theme={theme}
    >
      <Router matchContext={{ store }} resolver={resolver} />
    </RebassProvider>
  </Provider>
);

export default App;
