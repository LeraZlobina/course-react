import { takeEvery, call, put } from "redux-saga/effects";
import { serverLogIn } from "../../api";
//import {LOG_IN, authSuccess, authError} from "./actions"
import {AUTHENTICATE, logIn} from "./actions"

/*export function* authenticateSaga(action) {
    const responce = yield call(serverLogIn, {...action.payload});
    console.log(responce)
    if(responce.success === true) {
        yield put(authSuccess(responce.token))
    } else {
        yield put(authError('error'))
    }
}
export function* authSaga() {
    yield takeEvery(LOG_IN, authenticateSaga)
}*/

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogIn, email, password);
    console.log(success)
    if(success) {
        yield put(logIn())
    }
}
export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}