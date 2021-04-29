import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetAddresses } from "../../api";
import {GET_ADDRESSES, getAddresses} from "./actions"

export function* getAddressesSaga() {
    const addresses = yield call(serverGetAddresses);
    
    yield put(getAddresses(addresses))
    
}
export function* addressesSaga() {
    yield takeEvery(GET_ADDRESSES, getAddressesSaga)
}