import React from 'react';
import { Link, browserHistory } from 'react-router';
import store from '../store';
import Shorti from 'shorti';

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
  clickhandler: function(e){
    console.log(e);
    store.sessionModel.logout()
  },
  render: function (){
    let myName = store.sessionModel.get('username');
    let lilPic = store.sessionModel.get('avatar');
    let lilStyle = Shorti(`w-80 h-80 bg-url(${lilPic}) bg-cover`);
      return (
        <header>
          <h1 className='logo'>LAZYFAIRE</h1>
          <Link to='/getMessages'> inbox </Link>
          <Link to='/myProfile'> profile </Link>
          <Link to='/' onClick={this.clickhandler}>logout</Link>
          <div className="lilvatar" style={lilStyle}></div>
        </header>
    )
  }
})
