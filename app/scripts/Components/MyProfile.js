import React from 'react'
import store from '../store'

export default React.createClass({
  render: function () {
    let myAvatar = store.sessionModel.get('avatar')
    let myName = store.sessionModel.get('name')
    let myCity = store.sessionModel.get('city')
    let myState = store.sessionModel.get('state')

    return (
      <div className="myProfile">
        <img src={myAvatar} />
        <li>{myName}</li>
        <li>{myCity} {myState}</li>
      </div>
      )
  }
})
