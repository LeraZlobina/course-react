export const GET_COORDINATES = "GET_COORDINATES";
export const RESET_COORDINATES = "RESET_COORDINATES";
export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';

export const getCoordinates = ({ address1, address2 }) => ({
    type: GET_COORDINATES,
    payload: { address1, address2 }
});

export const updateCoordinates = (data) => ({
    type: UPDATE_COORDINATES,
    payload: data
});
export const resetCoordinates = () => ({type: RESET_COORDINATES});
