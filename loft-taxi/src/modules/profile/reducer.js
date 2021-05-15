import {PROFILE_SUBMIT} from "./actions"

const initialState = {
    isSubmitted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SUBMIT: 
            return {isSubmitted: true}
        
        default: 
            return state
        
    }
}

export const isSubmittedSelector = (store) => store.profile.isSubmitted;