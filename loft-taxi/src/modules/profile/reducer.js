import {
  CARD_UPDATED,
  PROFILE_SUBMIT,
  SET_CARD_DETAILS,
  SET_LOADING,
} from './actions';

const initialState = {
  isSubmitted: false,
  loading: false,
  cardUpdated: false,
  cardDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUBMIT:
      return {
        ...state,
        isSubmitted: true,
      };
    case CARD_UPDATED:
      return {
        ...state,
        cardUpdated: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CARD_DETAILS:
      return {
        ...state,
        cardDetails: action.payload,
      };
    default:
      return state;
  }
};

export const isSubmittedSelector = (store) => store.profile.isSubmitted;
export const cardDetailsSelector = (store) => store.profile.cardDetails;
export const cardLoadingSelector = (store) => store.profile.loading;
export const cardUpdatedSelector = (store) => store.profile.cardUpdated;

export default reducer;
