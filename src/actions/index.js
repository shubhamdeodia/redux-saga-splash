import { IMAGES, STATS } from '../constant'

const loadImages = () => (
    {
        type: IMAGES.LOAD
    }
)

const setImages = (images) => (
    {
        type: IMAGES.LOAD_SUCCESS,
        images
    }
)

const setError = (error) => (
    {
        type: IMAGES.LOAD_FAILURE,
        error
    }
)

const loadImageStats = (id) => (
    {
        type: STATS.LOAD,
        id
    }
)

const setImageStats = (id, downloads) => {
    console.log('setImageStats -> id', id)

    console.log('setImageStats -> downloads', downloads)
    return {
        type: STATS.LOAD_SUCCESS,
        id,
        downloads
    }
}

const setImageStatsError = (id) => (
    {
        type: STATS.LOAD_FAILURE,
        id
    }
)

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError
}
