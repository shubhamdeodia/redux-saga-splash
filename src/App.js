import React from 'react'
import Header from './components/Header/Header'
import { ImageGridConnected } from './components/ImageGrid/ImageGrid'
import './App.css'

function App () {
    return (
        <div className='App'>
            <Header />
            <ImageGridConnected />
        </div>
    )
}

export default App
