import React from 'react'
import store from '../store'
// import Nav from './Nav'
import Avatar from './Avatar'
import { Link, browserHistory } from 'react-router'

export default React.createClass({
  getInitialState () {
    return {}
  },
  updateState () {
    this.setState(store.sessionModel.toJSON())
  },
  componentDidMount () {
    store.sessionModel.on('change', this.updateState)
  },
  componentWillUnmount () {
    store.sessionModel.off('change', this.updateState)
  },
  clickhandler: function (e) {
    store.sessionModel.logout()
  },
  logoutHandler: (e) => { store.sessionModel.logout() },
  render: function () {
    return (
      <header>
        <Avatar />
        <h1 className="logo">lazyfair</h1>
        <nav>
          <Link to="getMessages"> inbox </Link>
          <Link to="myProfile"> profile </Link>
          <Link to="logout" onClick={this.logoutHandler}>logout</Link>
        </nav>
      </header>
    )
  }
})
