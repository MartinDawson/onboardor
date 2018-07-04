import { Resolver } from "found-relay";
import React from "react";
import { Provider } from "react-redux";

import environment from "./environment/environment";
import Router from "./routing/router";
import store from "./store/store";

const resolver = new Resolver(environment);

const App = () => (
  <Provider store={store}>
    <Router matchContext={{ store }} resolver={resolver} />
  </Provider>
);

export default App;
