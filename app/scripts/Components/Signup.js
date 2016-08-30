import React from 'react';
import {browserHistory} from 'react-router';
import store from '../store';

export default React.createClass({
  getInitialState: function(){
    return {};
  },
  updateState: function () {
    this.setState(store.sessionModel.toJSON());
  },
  componentDidMount: function () {
    store.sessionModel.on( 'change', this.updateState);
  },
  componentWillUnmount: function () {
    store.sessionModel.off( 'change', this.updateState);
  },
  submitHandler: function( e ) {
    e.preventDefault();
    var data = Object.keys( this.refs )
      .reduce( (a, b) => {
        a[ b ] = this.refs[ b ].value;
        return a;
      }, {});
      data.userphoto = 'http://i.imgur.com/47RBp85.png';
      store.sessionModel.signup( data );
  },
  shouldComponentUpdate: function ( nextProps, nextState ) {
    if ( nextState.authtoken ){
      browserHistory.push( '/app' );
      return false;
    } else {
      return true;
    }
  },
  render: function () {
    return (
      <form onSubmit={ this.submitHandler }>
        <input
          ref="username"
          type="text"
          placeholder="username" />
        <input
          ref="password"
          type="password"
          placeholder="password" />
        <input
          ref="verifyPassword"
          type="password"
          placeholder="verify password" />
        <input
          ref="location"
          type="text"
          placeholder="location" />
        <input
          ref="link"
          type="text"
          placeholder="social media link" />
        <input
          ref="skills"
          type="text"
          placeholder="skills" />
        <input
          ref="description"
          type="textarea"
          placeholder="description/bio" />
        <input
          type="submit"
          value="submit" />
      </form>
    )
  }
})
