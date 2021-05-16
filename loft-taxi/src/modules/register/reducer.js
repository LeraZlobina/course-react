import {REGISTER_IN} from "./actions"

const initialState = {
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_IN: 

            return {
                ...state,
                isRegisterIn: true
            }

        
        default: 
            return state
        
    }
}