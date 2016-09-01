import React from 'react'
import { Link, browserHistory } from 'react-router'
import store from '../store'
import Avatar from './Avatar'

export default React.createClass({
  getInitialState: () => { return {} },
  componentDidMount: () => {},
  logoutHandler: (e) => { store.sessionModel.logout() },
  render: function () {
    return (
      <div>
        <h1 className="logo">lazyfair</h1>
        <nav>
          <Link to="getMessages"> inbox </Link>
          <Link to="myProfile"> profile </Link>
          <Link to="login" onClick={this.logoutHandler}>logout</Link>
          <Avatar />
        </nav>
      </div>
    )
  }
})
