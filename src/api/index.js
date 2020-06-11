
const key = '4255031c787ea99ab11c50a238cd717954d6720905cc098d9ba26496a7796e4b'

const fetchImages = async (page) => {
    const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=10&page=${page}`)
    const data = await resp.json()
    if (resp.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}

const fetchImageStatistics = async (id) => {
    const resp = await fetch(`https://api.unsplash.com/photos/${id}/statistics/?client_id=${key}`)
    const data = await resp.json()
    if (resp.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}

export { fetchImages, fetchImageStatistics }

