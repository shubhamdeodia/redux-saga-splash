import { IMAGES } from '../constant'

const imagesReducer = (state = [], action) => {
    switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
        return [...state, ...action.images]

    default:
        return state
    }
}

export {
    imagesReducer
}
