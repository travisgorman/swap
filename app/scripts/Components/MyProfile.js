import React from 'react';
import store from '../store';
import Header from './Header';
import MyAssets from './MyAssets';
// import myCollection from '../Collection/myCollection';

export default React.createClass({
  getInitialState: function() {
    return {}
},
  componentDidMount: function () {
    store.assetCollection.on('change', this.updateState);
    console.log(this.state);
  },
  componentDidUpdate: function () {
    console.log(this.state);
  },
  componentWillUnmount: function () {
    store.assetCollection.off('change', this.updateState);
  },
  updateState: function () {
    this.setState(store.assetCollection.toJSON());
  },
  render: function () {
    console.log(this.state);
      return (
        <div className="myProfile">
          <Header />
          <img src={this.state.avatar}/>
          <li>{this.state.name}</li>
          <li>{this.state.city} {this.state.state}</li>
          <MyAssets />
        </div>
      )
  }
});
