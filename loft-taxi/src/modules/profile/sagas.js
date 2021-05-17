import { takeEvery, call, put } from 'redux-saga/effects';
import { serverGetCard, serverProfileSubmit } from '../../api';
import {
  CARD_DETAILS,
  GET_CARD_DETAILS,
  profileSubmit,
  setCardDetails,
  setLoading,
  setCardUpdated,
} from './actions';

export function* cardDetailsSaga(action) {
  yield put(setLoading(true));
  const { success } = yield call(serverProfileSubmit, action.payload);

  if (success) {
    const { cardName, expiryDate, cvc, cardNumber } = action.payload;
    yield put(profileSubmit());
    yield put(
      setCardDetails({
        cardName,
        expiryDate,
        cvc,
        cardNumber,
      })
    );
    yield put(setCardUpdated(true));
  }
  yield put(setLoading(false));
}

export function* getCardDetailsSaga(action) {
  const data = yield call(serverGetCard, action.payload);
  if (!data.hasOwnProperty('success')) {
    yield put(setCardDetails(data));
    if (data.cardName !== '') {
      yield put(profileSubmit());
    }
  }
}

export function* cardSaga() {
  yield takeEvery(CARD_DETAILS, cardDetailsSaga);
  yield takeEvery(GET_CARD_DETAILS, getCardDetailsSaga);
}
