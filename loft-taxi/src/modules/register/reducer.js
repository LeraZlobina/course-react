import {REGISTER_IN} from "./actions"

const initialState = {
    isRegisterIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_IN: 
            return {isRegisterIn: true}
        
        default: 
            return state
        
    }
}