import React from 'react'

import './Stats.css'

const Stats = ({ stats }) => {
    console.log('Stats -> stats', stats)
    if (!stats) {
        // loading not yet started
        return <span className='stats'>Loading...</span>
    }
    return (
        <span className='stats'>
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && `🤘 ${stats.downloads}`}
        </span>
    )
}

export default React.memo(Stats)
