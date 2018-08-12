import { Actions as FarceActions, MemoryProtocol, createHistoryEnhancer,
  queryMiddleware } from "farce";
import { createMatchEnhancer, foundReducer as found, Matcher } from "found";
import { combineReducers, compose, createStore } from "redux";

import routeConfig from "../routing/routeConfig";

const historyEnhancer = createHistoryEnhancer({
  middlewares: [queryMiddleware],
  protocol: new MemoryProtocol(location),
});

const matcher = new Matcher(routeConfig);
const matcherEnhancer = createMatchEnhancer(matcher);
const composeEnhancers = (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = composeEnhancers(
  historyEnhancer,
  matcherEnhancer,
);

const reducers = combineReducers({
  found,
});

const store = createStore(reducers, {}, middleWare);

store.dispatch(FarceActions.init());

export default store;
