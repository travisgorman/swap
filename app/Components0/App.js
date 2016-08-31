import React from 'react'
import Header from './Header'
import UserItem from './UserItem'
import Search from './Search'
import GetMessages from './GetMessages'
import store from '../store';
import underscore from 'underscore';
import AddAssets from './AddAssets';

export default React.createClass({
  getInitialState(){
    return {};
  },
  updateState(){
    this.setState(store.sessionModel.toJSON());
  },
  componentDidMount(){
    console.log(this.state);
    store.sessionModel.on('change', this.updateState);
  },
  componentWillUnmount(){
    store.sessionModel.off('change', this.updateState);
  },

  ////
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
