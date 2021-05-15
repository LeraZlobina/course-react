import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetRoute } from "../../api";
import { GET_COORDINATES, getCoordinates, updateCoordinates } from "./actions"

export function* getCoordinatesSaga(action) {
    try {
        const { address1, address2 } = action.payload;
        const coordinates = yield call(serverGetRoute, address1, address2);

        yield put(updateCoordinates(coordinates))
    } catch (err) {
        yield put(updateCoordinates([]))
    }


}
export function* routeSaga() {
    yield takeEvery(GET_COORDINATES, getCoordinatesSaga)
}