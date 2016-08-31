import React from 'react'
import { browserHistory, Link } from 'react-router'
import store from '../store'

export default React.createClass({
  getInitialState: function () {
    return {}
  },
  updateState: function () {
    this.setState(store.sessionModel.toJSON())
  },
  componentDidMount: function () {
    store.sessionModel.on('change', this.updateState)
  },
  componentWillUnmount: function () {
    store.sessionModel.off('change', this.updateState)
  },
  submitHandler: function (e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    store.sessionModel.login(username, password)
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    if (nextState.authtoken) {
      browserHistory.push('/app')
      return false
    } else {
      return true
    }
  },
  render: function () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          ref="username"
          type="text"
          placeholder="username" />
        <input
          ref="password"
          type="password"
          placeholder="password" />
        <input
          type="submit"
          value="submit" />
        <Link to="/signup"><span> create an account </span></Link>
      </form>
    )
  }
})
