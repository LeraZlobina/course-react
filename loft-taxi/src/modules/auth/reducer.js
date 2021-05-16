import {LOG_IN, LOG_OUT, AUTH_SUCCESS, AUTH_ERROR} from "./actions"

const initialState = {
    isLoggedIn: false,
    /*token: undefined,
    error: undefined*/
}

export default (state = initialState, action) => {
    switch (action.type) {
       case LOG_IN: 
            return {
                isLoggedIn: true,
            }
        
        case LOG_OUT: 
            return {
                isLoggedIn: false,
            }
        /*case AUTH_SUCCESS: 
            return {
                isLoggedIn: true,
                token: action.payload,
                error: undefined
            }
        
        case AUTH_ERROR: 
            return {
                isLoggedIn: false,
                token: undefined,
                error: action.payload
            }

         case LOG_OUT: 
            return {
                isLoggedIn: false,
                token: undefined,
                error: undefined
            }
        */
        default: 
            return state
        
    }
}
        
export const isLoggedInSelector = (store) => store.auth.isLoggedIn;
