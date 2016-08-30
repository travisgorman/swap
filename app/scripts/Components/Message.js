import React from 'react'
import store from '../store'

export default React.createClass({
  getInitialState(){
    return {
      fromWho: this.props.username,
      fromWhoId: this.props.id,
      messageForm: false,
      messageSent: false
    };
  },
  updateState(){
    this.setState(store.sessionModel.toJSON());
  },
  componentDidMount(){
    store.sessionModel.on('change', this.updateState);
    console.log(this.state);
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
  componentWillUnmount(){
    store.sessionModel.off('change', this.updateState);
  },
  render: function () {
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
      <li className="message bs-1">
        <h3>{this.props.sender}</h3>
        <main className="body">
          <p>{this.props.body}</p>
          <div
            className="message_button"
            id="message_button"
            onClick={this.showMessageForm} >
            reply
          </div>
        </main>
      </li>
    )
  }
})
