import { IMAGES } from '../constant'
import { take, fork, put, call, takeEvery } from 'redux-saga/effects'

import { fetchImageStatistics } from '../api'
import { loadImageStats, setImageStats, setImageStatsError } from '../actions'

function* handleStatsRequest (id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id))
            const res = yield call(fetchImageStatistics, id)
            yield put(setImageStats(id, res.downloads.total))
            return true
        }
        catch (e) {

        }
    }
    yield put(setImageStatsError(id))
}

// wacther saga
export default function* watchStatsRequest () {
    // STATS_SAGA: for every image load success
    // yield takeEvery(IMAGES.LOAD_SUCCESS, function* (action) {
    //     const { images } = action
    //     for (let i = 0; i < images.length; i++) {
    //         yield call(handleStatsRequest, images[i].id)
    //     }
    // })

    while (true) {
        // STATS_SAGA: for every image load success
        const { images } = yield take(IMAGES.LOAD_SUCCESS)

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id)
        }
    }
}
