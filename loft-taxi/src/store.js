import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules/index";
import {authMiddleware} from "./modules/auth/middleware";
import { saveState, loadState } from "./localStorage";

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers (
        applyMiddleware(authMiddleware),
    )
)   

store.subscribe(
    () => {
        saveState({
            isLoggedIn: store.getState().isLoggedIn
        })
    }
    
    
);