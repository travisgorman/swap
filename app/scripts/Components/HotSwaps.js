import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import store from '../store';

export default React .createClass({
  getInitialState:function () {
    return {
      session: store.sessionModel.get('username'),
      recipient: store.userCollection.where({
          id:this.props.params.recipient
        }),
      messages: store.messageCollection.toJSON(),
      conversation: store.messagesCollection
        .findConversation( this.props.params.recipient ),
      fetched: false,
    }
  },
  ////////


  ////////
  sendMessage: function(e){
    e.preventDefault();
    let sentMessage = this.refs.textbox.value;
    store.messageCollection
      .sendMessage( store.sessionModel
        .get('username'),this.props.params.recipient, sentMessage);
  },

  updateState: function(){
    this.setState({
      session: store.session.get('username'),
      recipient: store.userCollection
        .where({
          username: this.props.params.recipient
        }),
        conversation: store.messageCollection
          .findConversation(this.props.params.recipient),
    });

    if (this.state.session && !this.state.fetched){
      store.messageCollection.findMyMessages(this.state.username);
      this.setState({fetched:true});
    }
  },
  componentDidMount: function () {
    store.userCollection.fetch();
    store.sessionModel.on('change', this.updateState);
    store.userCollection.on('change update', this.updateState);
    store.messageCollection.on('change update', this.updateState)
  },

  componentWillUnmount: function(){
    store.sessionModel.off('change', this.updateState);
    store.userCollection.off('change update', this.updateState);
    store.messagesCollection.off('change update', this.updateState);
  },
  render: function () {
    let convo = _.sortBy(this.state.conversation, (message) => {
      return moment(message.get('timestamp')).unix();
    });
    convo = convo.map( (curr, i, arr) => {
      curr = curr.toJSON()
    })
///////////

///////////
    return (

      <div className="message-page-container">

        <Nav/>

        <Link
          to={ `/user/${this.props.params.recipient}` }
          className="link">
          <figure
            className="profile-pic"
            style={styles}
            alt="profile-picture of recipient"/>

          <h2>{this.props.params.recipient}</h2>
        </Link>

        <ul className="messages-container">

          {convo}

        </ul>

        <form
          className="chat-form-container"
          onSubmit={this.sendMessage}>
          <input
            type="text"
            role="textbox"
            tabIndex="1"
            ref="textbox" />
          <input
            className="submit-btn"
            type="submit"
            role="button"
            tabIndex="2" />
          <button
            onClick={this.sendMessage}>
              send
              </button>
        </form>

      </div>
    );
  }

  ///////////

  ///////////
});
