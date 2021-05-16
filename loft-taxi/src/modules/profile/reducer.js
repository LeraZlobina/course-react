import {PROFILE_SUBMIT, SET_PROFILE_SUBMIT} from "./actions"

const initialState = {
    isSubmitted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SUBMIT: 
            return {isSubmitted: true}
        
        case SET_PROFILE_SUBMIT: 
            return {isSubmitted: false}
        
        default: 
            return state
        
    }
}

export const isSubmittedSelector = (store) => store.profile.isSubmitted;