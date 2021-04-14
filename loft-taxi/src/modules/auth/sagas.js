import { takeEvery, call, put } from "redux-saga/effects";
import { serverLogIn } from "../../api";
import {AUTHENTICATE, logIn} from "./actions"

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogIn, email, password);
    if(success) {
        yield put(logIn())
    }
}
export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}