import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import lazyLoadingImages from '../../fixtures/lazyLoadingImages.json'

interface lazyLoadingImagesType {
  alt: string
  src: string
  id: number
}

class LazyLoadingRoute extends Component {
  renderingImages = () => {
    const x: any = lazyLoadingImages
    return x.map(image => {
      return (
        <div>
          <LazyLoadImage
            alt={image.alt}
            height={1000}
            src={image.src} // use normal <img> attributes as props
            width={1000}
          />
        </div>
      )
    })
  }
  render() {
    return <div>{this.renderingImages()}</div>
  }
}

export default LazyLoadingRoute
