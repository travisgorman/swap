import React from 'react'
import Header from './Header'
import Search from './Search'
import GetMessages from './GetMessages'
import store from '../store'

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
  componentDidUpdate () {
    console.log('App component mounted. Active User: ', this.state)
  },
  componentWillUnmount () {
    store.sessionModel.off('change', this.updateState)
  },
  render () {
    return (
      <div className="welcomePage">
        <Header />
        <Search />
        <GetMessages />

      </div>
    )
  }
})
