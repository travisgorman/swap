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
    let searchSkill = this.refs.skills.value;
    // console.log(e, searchLocation, searchSkill);
    store.userCollection.searchLocationAndSkill( searchLocation, searchSkill );
  },
  browseHandler: function (e) {
    e.preventDefault();
    // console.log(e);
    let searchLocation = this.refs.city.value;
    // console.log( e, searchLocation );
    store.userCollection.browseCity( searchLocation );
  },
    render() {
      let self = this.state;
      // console.log(this.state.users);
      let mySearchResults = this.state.users
        .map( (result, i) => {
          return (
            <UserItem
              key={i}
              id={result._id}
              userphoto={ result.avatar }
              username={ result.username }
              location={ result.location }
              skills={ result.skills } />
          )
        });
        return (
          <div className="search">
              <form
                className="searchForm"
                onSubmit={this.searchHandler} >
                <input
                  type="text"
                  ref="location"
                  className="searchLocation"
                  placeholder="where?" />
                <input
                  type="text"
                  ref="skills"
                  className="searchSkill"
                  placeholder="What?" />
                <input
                  type="submit"
                  value="search"
                  className="searchButton" />
              </form>
              <form
                className="searchForm"
                onSubmit={this.browseHandler} >
                <input
                  type="text"
                  ref="city"
                  className="searchLocation"
                  placeholder="where?" />
                <input
                  type="submit"
                  value="browse by city"
                  className="searchButton" />
                  <input
                    type="submit"
                    onSubmit={this.callAssets}
                    value="assets"
                    className="btn" />
              </form>
                <div className="SearchResults">
                  {mySearchResults}
                </div>
          </div>
        )
    }
});
