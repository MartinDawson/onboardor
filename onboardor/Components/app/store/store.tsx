import { Actions as FarceActions, BrowserProtocol, createHistoryEnhancer,
  queryMiddleware } from "farce";
import { createMatchEnhancer, foundReducer as found, Matcher } from "found";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as form } from "redux-form";
import thunk from "redux-thunk";

import routeConfig from "../routing/routeConfig";

const historyEnhancer = createHistoryEnhancer({
  middlewares: [queryMiddleware],
  protocol: new BrowserProtocol(),
});

const matcherEnhancer = createMatchEnhancer(
  new Matcher(routeConfig),
);

const composeEnhancers = (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = composeEnhancers(
  applyMiddleware(thunk),
  historyEnhancer,
  matcherEnhancer,
);

const reducers = combineReducers({
  form,
  found,
});

const store = createStore(reducers, {}, middleWare);

store.dispatch(FarceActions.init());

export default store;
