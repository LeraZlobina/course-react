import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetRoute } from "../../api";
import {GET_COORDINATES, getCoordinates} from "./actions"

export function* getCoordinatesSaga(action) {
    const {address1, address2} = action.payload;
    const coordinates = yield call(serverGetRoute, address1, address2);
    
    yield put(getCoordinates(coordinates))
    
}
export function* routeSaga() {
    yield takeEvery(GET_COORDINATES, getCoordinatesSaga)
}