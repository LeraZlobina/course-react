import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules";
import createSagaMiddleware from "redux-saga";
import {sagas} from "./sagas"

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers (
        applyMiddleware(sagaMiddleware),
    )
)   

sagaMiddleware.run(sagas);



