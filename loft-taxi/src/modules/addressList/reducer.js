import { UPDATE_ADDRESSES } from "./actions";

const initialState = {
    addresses: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ADDRESSES:
            return {
                ...state,
                addresses: action.payload
            }
        default:
            return state
    }
}

export const addressesSelector = (store) => store.addressList.addresses;