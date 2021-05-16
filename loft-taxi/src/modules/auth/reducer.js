import {LOG_IN, LOG_OUT} from "./actions"

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: 
            return { 
                ...state,
                token: action.payload,
                isLoggedIn: true 
            }
        
        case LOG_OUT: 
            return {
                ...state,
                isLoggedIn: false,
                token: null
            }
        
        default: 
            return state
        
    }
}

export const isLoggedInSelector = (store) => store.auth.isLoggedIn;