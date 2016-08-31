import React from 'react';
import MessageCollection from '../Collections/MessageCollection';
import MessageModel from '../Models/MessageModel';
import store from '../store';

export default React.createClass({

  render: function () {
    <form
      className='writeMessage'
      onSubmit={store.messageCollection.}
    ></form>
  }
})
