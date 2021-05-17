export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const UNAUTHENTICATE = "UNAUTHENTICATE";
export const LOAD_AUTH = 'LOAD_AUTH'

export const logIn = (token) => ({
    type: LOG_IN,
    payload: token
});
export const logOut = () => ({ type: LOG_OUT });

export const loadAuth = () => ({ type: LOAD_AUTH });

export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});



