import { takeEvery, call, put } from "redux-saga/effects";
import { serverLogIn } from "../../api";

import { UNAUTHENTICATE, AUTHENTICATE, logIn, logOut } from "./actions"

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const { success, token } = yield call(serverLogIn, email, password);
    if(success) {
        localStorage.setItem('token', token);
        yield put(logIn(token))
    }
}

export function* unauthenticateSaga(action) {
    localStorage.removeItem('token');
    yield put(logOut());
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
    yield takeEvery(UNAUTHENTICATE, unauthenticateSaga);
}

