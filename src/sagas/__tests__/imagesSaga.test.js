import { getPage, handleImagesLoad } from '../imagesSaga'
import { runSaga } from 'redux-saga'
import * as api from '../../api'
import { setImages, setError } from '../../actions'

test('selector gives back the page', () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)
})

test('should load images and handle them in case of success', async () => {
    const dispatchActions = []

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: (action) => {
            dispatchActions.push(action)
        }
    }

    const mockedImages = ['abc', 'div']
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages))

    await runSaga(fakeStore, handleImagesLoad).done

    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchActions).toContainEqual(setImages(mockedImages))

    jest.clearAllMocks()
})

test('should load images and handle them in case of error', async () => {
    const dispatchActions = []

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: (action) => {
            dispatchActions.push(action)
        }
    }

    const error = 'error'
    api.fetchImages = jest.fn(() => Promise.reject(error))

    await runSaga(fakeStore, handleImagesLoad).done

    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchActions).toContainEqual(setError(error))

    jest.clearAllMocks()
})
