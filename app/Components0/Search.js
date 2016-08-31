import React from 'react';
import UserItem from './UserItem';
import _ from 'underscore';

export default React.createClass({
  getInitialState: function() {
  return {};
},
updateState: function() {
  this.setState(store.session.toJSON());
},
  componentDidMount: function() {
    store.session.on('change', this.updateState);
  },
  componentWillUnmount: function() {
    store.session.off('change', this.updateState);
  },
    submitHandler: function (e) {
    e.preventDefault()
    store.userCollection.searchLocationAndSkill(what, where)
  },
    render() {
      let self = this.state;
      let mySearchResults = this.state.users
        .map( (result, i) => {
          return (
            <UserItem
              key={i}
              avatar={ result.avatar }
              name={ result.name }
              location={ result.location } /> )
        });
        return (
          <div className="Search">
              <form
                className="searchForm"
                onSubmit={this.submitHandler} >
                <input
                  type="text"
                  ref="what"
                  className="searchTerm"
                  placeholder="What?" />
                <input
                  type="text"
                  ref="where"
                  placeholder="Where?" />
                <input
                  type="submit"
                  value="search" />
                </form>
                <div className="SearchResults">
                  {mySearchResults}
                </div>
              </div>
        )
    }
});
