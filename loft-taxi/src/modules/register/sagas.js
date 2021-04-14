import { takeEvery, call, put } from "redux-saga/effects";
import { serverRegisterIn } from "../../api";
import {REGISTRATION, registerIn} from "./actions"

export function* registrationSaga(action) {
    const {email, password, name, surname} = action.payload;
    const success = yield call(serverRegisterIn, email, password, name, surname);
    if(success) {
        yield put(registerIn())
    }
}
export function* registerSaga() {
    yield takeEvery(REGISTRATION, registrationSaga)
}