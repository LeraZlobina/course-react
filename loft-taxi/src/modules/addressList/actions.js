export const GET_ADDRESSES = "GET_ADDRESSES";
export const UPDATE_ADDRESSES = 'UPDATE_ADDRESSES';

export const getAddresses = () => ({
    type: GET_ADDRESSES,
});

export const updateAddresses = (data) => ({
    type: UPDATE_ADDRESSES,
    payload: data
});

