import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules";
import { saveState, loadState } from "./localStorage";
import createSagaMiddleware from "redux-saga";
import {sagas} from "./sagas"

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers (
        applyMiddleware(sagaMiddleware),
    )
)   

sagaMiddleware.run(sagas);

store.subscribe(
    () => {
        saveState({
            isLoggedIn: store.getState().isLoggedIn,
            isRegisterIn: store.getState().isRegisterIn,
            isSubmitted: store.getState().isSubmitted
        })
    }
);

