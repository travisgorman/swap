import React from 'react';
import Header from './Header';
import UserItem from './UserItem';
import _ from 'underscore';
import store from '../store';
import userCollection from '../Collections/UserCollection';

export default React.createClass({
  getInitialState () {
      return { users: store.userCollection.toJSON() }
  },
  componentDidMount: function () {
    store.userCollection.on( 'update change', this.updateState)
  },
  updateState: function () {
    this.setState({
      users: store.userCollection.toJSON()
    });
  },
  componendWillUnmount: function () {
    store.userCollection.off('update change', this.updateState)
  },
  searchHandler: function (e) {
    e.preventDefault();
    let searchLocation = this.refs.location.value;
    let searchTerm = this.refs.skills.value;
    store.userCollection.searchLocationAndSkill( searchLocation, searchSkill );
  },
  browseHandler: function (e) {
    e.preventDefault();
    let searchLocation = this.refs.city.value;
    store.userCollection.browseCity( searchLocation );
  },
    render() {
      let self = this.state;
      let mySearchResults = this.state.users
        .map( (result, i) => {
          return (
            <UserItem
              key={i}
              id={result._id}
              userphoto={ result.avatar }
              username={ result.name }
              location={ result.location }
              skills={ result.skills } />
          )
        });
        return (
          <div className="search">
              <form onSubmit={this.searchHandler} >
                <input type="text"
                  ref="location"
                  placeholder="where?" />
                <input type="text"
                  ref="skills"
                  placeholder="What?" />
                <input type="submit"
                  value="search" />
              </form>
              <form onSubmit={this.browseHandler} >
                <input type="text"
                  ref="city"
                  placeholder="where?" />
                <input type="submit"
                  value="browse by city"
                  className="searchButton" />
              </form>
                <div className="SearchResults">
                  {mySearchResults}
                </div>
          </div>
        )
    }
});
