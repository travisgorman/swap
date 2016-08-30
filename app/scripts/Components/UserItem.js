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
  componentDidMount: function () {
    // console.log(this.state);
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
          store.sessionModel.get('username'),
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
            className="message"
            placeholder="Message..."
          />
          <input
            type="submit"
            className="messageSendButton"
            onClick={this.sendHandler } />
          <input
            type="submit"
            value="cancel"
            className="messageCancelButton"
            onClick={this.cancelSendMessage } />
        </div>
    )
  }
    return (
      <div className="UserItemView">
        <div
          className="User_Item"
          data-id={this.props.id}>
          <img
            className="avatar"
            src={this.props.userphoto} />
          <div className="user_info">
            <h1> {this.props.username} </h1>
            <h2> {this.props.location} </h2>
          </div>
          <div
            className="message_button"
            id="message_button"
            onClick={this.showMessageForm} >
            Message
          </div>
          {messageForm}
        </div>
      </div>
    )
  }
});
