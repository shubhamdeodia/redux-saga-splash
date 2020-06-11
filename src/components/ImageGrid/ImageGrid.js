import React, { Component } from 'react'
import './ImageGrid.css'
import { connect } from 'react-redux'
import { loadImages } from '../../actions'
import PropTypes from 'prop-types'
import Stats from '../Stats/Stats'

class ImageGrid extends Component {
    componentDidMount () {
        this.props.loadImages()
    }

    render () {
        const { images, error, imageStats } = this.props
        return (
            <div className='content'>
                <section className='grid'>
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width
                            )}`}>
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username} />
                        </div>
                    ))}

                </section>
                <button className='button' onClick={this.props.loadImages}>Load More</button>
                {error && <div className='error'> {JSON.stringify(error)}</div>}
            </div>
        )
    }
}

ImageGrid.propTypes = {
    images: PropTypes.array.isRequired,
    error: PropTypes.object,
    loadImages: PropTypes.func.isRequired

}

const mapStateToProps = (state) => {
    const { isLoading, images, error, imageStats } = state
    return {
        isLoading,
        images,
        error,
        imageStats
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        loadImages: () => dispatch(loadImages())
    }
}

const ImageGridConnected = connect(mapStateToProps, mapDispacthToProps)(ImageGrid)

export { ImageGridConnected }
