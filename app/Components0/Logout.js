import React from 'react';
import Backbone from 'backbone';
// import {browserHistory, Link} from 'react-router';
import settings from '../settings';
import store from '../store';

export default React.createClass({
  render: function () {
    return (
      <div
        id="logoutButton"
        className="navButton"
        onClick={this.clickHandler} >
          logout
      </div>
    )
  }
})
