import {fork} from 'redux-saga/effects';
import {authSaga} from './modules/auth/sagas';
import {registerSaga} from './modules/register/sagas';
import {cardSaga} from './modules/profile/sagas';
import {addressesSaga} from './modules/addressList/sagas';
import {routeSaga} from './modules/route/sagas';

export function* sagas() {
    yield fork(authSaga);
    yield fork(registerSaga);
    yield fork(cardSaga);
    yield fork(addressesSaga);
    yield fork(routeSaga);
}