export const PROFILE_SUBMIT = 'PROFILE_SUBMIT';
export const CARD_DETAILS = 'CARD_DETAILS';
export const GET_CARD_DETAILS = 'GET_CARD_DETAILS';
export const SET_CARD_DETAILS = 'SET_CARD_DETAILS';
export const SET_LOADING = 'SET_LOADING';
export const CARD_UPDATED = 'CARD_UPDATED';

export const getCardDetails = (token) => ({
  type: GET_CARD_DETAILS,
  payload: token,
});

export const setCardUpdated = (data) => ({
  type: CARD_UPDATED,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});

export const setCardDetails = (data) => ({
  type: SET_CARD_DETAILS,
  payload: data,
});

export const profileSubmit = () => ({ type: PROFILE_SUBMIT });

export const updateCardDetails = (data) => ({
  type: CARD_DETAILS,
  payload: data,
});
