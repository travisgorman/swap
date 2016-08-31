import React from 'react'
import $ from 'jquery'
import store from '../store'

export default React.createClass({
  render: function () {
    return (
      <div className="assetWrapper">
        <h4>{this.props.title}</h4>
        <img src={this.props.img} />
        <p>{this.props.about}</p>
      </div>
    )
  }
})
