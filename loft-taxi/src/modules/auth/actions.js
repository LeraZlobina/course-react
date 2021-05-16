export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
//export const AUTH_SUCCESS = "AUTH_SUCCESS";
//export const AUTH_ERROR = "AUTH_ERROR";

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});

/*export const logIn = () => ({
    type: LOG_IN,
});

export const logOut = () => ({type: LOG_OUT});

export const authSuccess = (data) => ({
    type: AUTH_SUCCESS,
    payload: data
});

export const authError = (data) => ({
    type: AUTH_ERROR,
    payload: data

});*/

