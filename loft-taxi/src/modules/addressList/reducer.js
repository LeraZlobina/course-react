import {GET_ADDRESSES} from "./actions";

const initialState = {
    addresses: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESSES: 
            return { addresses: [...state, action.payload] }
        default: 
            return state
    }
}