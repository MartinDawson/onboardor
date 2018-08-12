import React from "react";
import { Resolver } from "found-relay";
import environment from "./environment/environment";
import Router from "./routing/router";
import { Provider as RebassProvider } from "rebass";
import theme from "../../../Components/shared/utilities/theme";
import store from "./store/store";
import { Provider } from "react-redux";

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
