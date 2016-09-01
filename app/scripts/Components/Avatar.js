import React from 'react'
import store from '../store'
import Shorti from 'shorti'

export default React.createClass({
  render: () => {
    let lilPic = store.sessionModel.get('avatar')
    let lilStyle = Shorti(`w-80 h-80 bg-url(${lilPic}) bg-cover`)
    return (
      <div className="avatar-component">
        <div
          className="avatar"
          style={lilStyle} >
        </div>
      </div>
    )
  }
})
