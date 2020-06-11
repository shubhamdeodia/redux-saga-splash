import { takeEvery, put, select, call } from 'redux-saga/effects'
import { IMAGES } from '../constant'
import { fetchImages } from '../api'
import { setImages, setError } from '../actions'

export const getPage = (state) => state.nextPage

export function* handleImagesLoad () {
    try {
        const page = yield select(getPage)
        const images = yield call(fetchImages, page)

        // STATS_SAGA: Wathces this
        yield put(setImages(images))
    }
    catch (error) {
        // dispatch error
        yield put(setError(error.toString()))
    }
}

// wacther saga
export default function* watchImagesLoad () {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

