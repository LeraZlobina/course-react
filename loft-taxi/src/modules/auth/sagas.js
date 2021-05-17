import { takeEvery, call, put } from 'redux-saga/effects';
import { serverGetCard, serverLogIn } from '../../api';
import { getCardDetails } from '../profile/actions';

import {
  UNAUTHENTICATE,
  AUTHENTICATE,
  logIn,
  logOut,
  LOAD_AUTH,
} from './actions';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const { success, token } = yield call(serverLogIn, email, password);
  if (success) {
    localStorage.setItem('token', token);
    yield put(logIn(token));
    const data = yield call(serverGetCard, token);
    console.log(data);
  }
}

export function* loadAuthSaga(_action) {
  const token = localStorage.getItem('token');
  if (token) {
    yield put(getCardDetails(token));
    yield put(logIn(token));
  }
}

export function* unauthenticateSaga(_action) {
  localStorage.removeItem('token');
  yield put(logOut());
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
  yield takeEvery(UNAUTHENTICATE, unauthenticateSaga);
  yield takeEvery(LOAD_AUTH, loadAuthSaga);
}
