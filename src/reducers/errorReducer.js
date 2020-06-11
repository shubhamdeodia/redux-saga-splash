import { IMAGES } from '../constant'

const errorReducer = (state = null, action) => {
    switch (action.type) {
    case IMAGES.LOAD_FAILURE:
        return action.error
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
        return null
    default:
        return state
    }
}

export { errorReducer }

