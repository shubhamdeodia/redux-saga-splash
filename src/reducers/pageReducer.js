import { IMAGES } from '../constant'

const pageReducer = (state = 1, action) => {
    switch (action.type) {
    case IMAGES.LOAD:
        return state + 1

    default:
        return state
    }
}

export { pageReducer }
