import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import Logger from "redux-logger";
import CreateSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import RootSaga from "./sagas/rootSaga";

export const history = createBrowserHistory();
const sagaMiddleware = CreateSagaMiddleware();

export const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware, Logger))
);

sagaMiddleware.run(RootSaga);
