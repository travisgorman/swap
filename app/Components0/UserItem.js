import React from 'react'
import $ from 'jquery'
import store from '../store'
import MessageCollection from '../Collections/MessageCollection'

export default React.createClass({
  getInitialState: function () {
    return {
      who: this.props.username,
      whois: this.props.id,
      messageForm: false,
      messageSent: false
    }
  },
  showMessageForm: function () {
    this.setState({
      messageForm: true
    })
  },
  cancelSendMessage: function (e) {
    e.preventDefault()
    this.setState({
      messageForm: false
    })
  },
  sendHandler: function (e) {
    e.preventDefault()
      let message = this.refs.message.value
      store.messageCollection
        .sendMessage(
          store.sessionModel.get('_id'),
          this.props.id,
          message
        )
      this.setState({
        messageSent: true,
        messageForm: false
      });
  },
  render: function() {
    let messageForm, messageSent, messageButton
    if (this.state.messageForm) {
      messageForm = (
        <div className="messageForm">
          <input
            type="textArea"
            ref="message"
            placeholder="Message..." />
          <input
            type="submit"
            className="send btn"
            onClick={this.sendHandler } />
          <input
            type="submit"
            value="cancel"
            className="cancel btn"
            onClick={this.cancelSendMessage } />
        </div>
    )
  }
    return (
      <div className="User_Item"
        data-id={this.props.id}>
        <img className="avatar"
          src={this.props.avatar} />
        <div className="user_info">
          <h1>{this.props.name}</h1>
          <h2>{this.props.location}</h2>
        </div>
        <div className="message_button"
          onClick={this.showMessageForm} >
          Message
      </div>
        {messageForm}
      </div>
    )
  }
});
