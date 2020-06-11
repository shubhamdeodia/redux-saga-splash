import { STATS } from '../constant'

const statsReducer = (state = {}, action) => {
    switch (action.type) {
    case STATS.LOAD:
        return {
            ...state,
            [action.id]: {
                isLoading: true,
                downloads: null,
                error: false
            }
        }
    case STATS.LOAD_SUCCESS:
        console.log('statsReducer ->   action.downloads', action.downloads)
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                downloads: action.downloads,
                error: false
            }
        }
    case STATS.LOAD_FAILURE:
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                downloads: null,
                error: true
            }
        }
    default:
        return state
    }
}

export { statsReducer }
