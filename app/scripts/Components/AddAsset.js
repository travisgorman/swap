import React from 'react'
import $ from 'jquery'
import store from '../store'

export default React.createClass({
  submitHandler: function (e) {
    e.preventDefault()
    console.log(e)
    let title = this.refs.title.value
    let about = this.refs.about.value
    let img = this.refs.img.value
    let me = store.sessionModel.get('userId')
    store.assetCollection.assetHandler(title, about, img, me)
    $('.assetField').val('')
  },
  render: function () {
    return (
      <form
        className="addAssetForm"
        onSubmit={this.submitHandler}>
        <input
          id="assetFieldText"
          type="text"
          ref="title"
          className="assetField"
          placeholder="title" />
        <input
          id="assetFieldText"
          type="text"
          ref="about"
          className="assetField"
          placeholder="about" />
        <input
          id="assetFieldText"
          type="text"
          ref="img"
          className="assetField"
          placeholder="photo" />
        <input
          type="submit"
          value="submit" />
      </form>
    )
  }
})
