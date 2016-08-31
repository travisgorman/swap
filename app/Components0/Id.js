import React from 'react';
import Backbone from 'backbone';
import { hashHistory, Link } from 'react-router';
import store from '../store';

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
  // eventHandler / custom functions ?
  render(){
    let myName =
    return (
      <div>
        <h3>Hello {myName} </h3>
      </div>
    )
  }
});
