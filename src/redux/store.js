import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
// to display actions to the dev console
import logger from "redux-logger";
// brings back the data from local storage when the page is reloaded.
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";
// sagas
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
