import { takeEvery, call, put } from "redux-saga/effects";
import { serverProfileSubmit } from "../../api";
import {CARD_DETAILS, profileSubmit} from "./actions"

export function* cardDetailsSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = yield call(serverProfileSubmit, cardNumber, expiryDate, cardName, cvc);
    if(success) {
        yield put(profileSubmit())
    }
}
export function* cardSaga() {
    yield takeEvery(CARD_DETAILS, cardDetailsSaga)
}