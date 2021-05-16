import { takeEvery, call, put } from "redux-saga/effects";
import { serverRegisterIn } from "../../api";
import { logIn } from "../auth/actions";
import {REGISTRATION, registerIn} from "./actions"

export function* registrationSaga(action) {
    const { success, token } = yield call(serverRegisterIn, action.payload);
    if(success) {
        localStorage.setItem('token', token);
        yield put(logIn(token));
    }
}
export function* registerSaga() {
    yield takeEvery(REGISTRATION, registrationSaga)
}