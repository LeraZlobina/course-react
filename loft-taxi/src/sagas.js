import {fork} from 'redux-saga/effects';
import {authSaga} from './modules/auth/sagas';
import {registerSaga} from './modules/register/sagas';
import {cardSaga} from './modules/profile/sagas';

export function* sagas() {
    yield fork(authSaga);
    yield fork(registerSaga);
    yield fork(cardSaga);
}