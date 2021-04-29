export const GET_COORDINATES = "GET_COORDINATES";
export const RESET_COORDINATES = "GET_COORDINATES";


export const getCoordinates = (address1, address2) => ({
    type: GET_COORDINATES,
    payload: {address1, address2}
});
export const resetCoordinates = () => ({type: RESET_COORDINATES});
