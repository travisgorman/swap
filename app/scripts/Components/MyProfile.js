import React from 'react';
import store from '../store';
import Header from './Header';

export default React.createClass({
  getInitialState: function () {
    return  store.sessionModel.toJSON();
  },
  componentDidMount: function () {
    store.sessionModel.on('change', this.updateState);
    console.log(this.state);
  },
  componentWillUnmount: function () {
    store.sessionModel.off('change', this.updateState);
  },
  updateState: function () {
    this.setState(store.sessionModel.toJSON());
  },
  render: function () {
    console.log(this.state);
    return (
            <div>
              <Header/>
              <div className="myProfile">
                <div className="photo">
                  <img src={this.state.avatar} alt="user profile photo"/>
                </div>
                <div className="info">
                  <h3>User Info</h3>
                  <ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.city} {this.state.state}</li>
                    <li>{this.state.social}</li>
                  </ul>
                </div>
                <div className="Assets">
                  <h3>Assets</h3>
                </div>
                <div className="description">
                </div>
              </div>
            </div>
      )
  }
});
