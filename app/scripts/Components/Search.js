import React from 'react'
import UserItem from './UserItem'
import store from '../store'

export default React.createClass({
  getInitialState () {
    return { users: store.userCollection.toJSON() }
  },
  componentDidMount: function () {
    store.userCollection.on('update change', this.updateState)
  },
  updateState: function () {
    this.setState({
      users: store.userCollection.toJSON()
    })
  },
  componendWillUnmount: function () {
    store.userCollection.off('update change', this.updateState)
  },
  searchHandler: function (e) {
    e.preventDefault()
    let who = this.refs.who.value
    this.setState({
      users: store.userCollection.findUser(who)
    })
  },
  browseHandler: function (e) {
    e.preventDefault()
    let what = this.refs.city.value
    this.setState({
      users: store.userCollection.findInCity(what)
    })
  },

  render () {
    let mySearchResults = this.state.users
      .map((result, i) => {
        return (
          <UserItem
            key={i}
            id={result._id}
            avatar={result.avatar}
            name={result.name}
            location={result.location} />
        )
      })
    return (
      <div className="search">
        <form onSubmit={this.searchHandler} >
          <input type="text"
            ref="who"
            placeholder="Who?" />
          <input type="submit"
            value="search"
            className="btn" />
        </form>
        <form onSubmit={this.browseHandler} >
          <input type="text"
            ref="city"
            placeholder="Where?" />
          <input type="submit"
            value="browse by city"
            className="btn" />
        </form>
        <div className="SearchResults">
              {mySearchResults}
        </div>
      </div>
    )
  }
})
