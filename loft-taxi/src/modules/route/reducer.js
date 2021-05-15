import {UPDATE_COORDINATES, RESET_COORDINATES} from "./actions";

const initialState = {
    coordinates: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COORDINATES: 
            return {
                ...state,
                coordinates: action.payload
            }
        
        case RESET_COORDINATES: 
            return {
                ...state,
                coordinates: []
            }
        
        default: 
            return state
        
    }
};

export const coordinatesSelector = (store) => store.coordinates.coordinates;