import { applyMiddleware, createStore, compose } from "redux";
import PromiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import Reducers from "./reducers";

const logger = createLogger({ collapsed: true });
const middleware = [PromiseMiddleware, thunk];
let composerEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
  composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(
  Reducers,
  composerEnhancers(applyMiddleware(...middleware))
);
export default store;
