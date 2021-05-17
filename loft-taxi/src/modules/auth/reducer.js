import { LOG_IN, LOG_OUT, AUTH_SUCCESS, AUTH_ERROR } from './actions';

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

export const isLoggedInSelector = (store) => store.auth.isLoggedIn;
export const tokenSelector = (store) => store.auth.token;

export default reducer;
