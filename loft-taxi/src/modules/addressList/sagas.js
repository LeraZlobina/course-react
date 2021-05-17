import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetAddresses } from "../../api";
import {GET_ADDRESSES, updateAddresses} from "./actions"

export function* getAddressesSaga() {
    try{
        const data = yield call(serverGetAddresses);
    
        yield put(updateAddresses(data.addresses));
    } catch(err) {
        yield put(updateAddresses([]));
    }
}


export function* addressesSaga() {
    yield takeEvery(GET_ADDRESSES, getAddressesSaga);
}