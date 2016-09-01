import React from 'react'
import store from '../store'
import Header from './Header'

export default React.createClass({
  getInitialState () { return {} },
  updateState () {
    this.setState(store.sessionModel.toJSON())
  },
  componentDidMount () {
    store.sessionModel.on('change', this.updateState)
  },
  componentDidUpdate () {
    console.log('App component mounted. Active User: ', this.state)
  },
  componentWillUnmount () {
    store.sessionModel.off('change', this.updateState)
  },
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
})
