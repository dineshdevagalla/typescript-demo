import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import './index.css'

@observer
class ImageHover extends React.Component {
  @observable list: Array<any> = []

  renderingList() {
    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return this.list.map(eachItem => {
      return <div className='eachElement'>{eachItem}</div>
    })
  }

  render() {
    return <div className='containerImageHover'>{this.renderingList()}</div>
  }
}

export default ImageHover
