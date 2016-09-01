import React from 'react'
import store from '../store'

export default React.createClass({
  getInitialState: function () {
    return {
      messageForm: false,
      messageSent: false
    }
  },
  showMessageForm: function () {
    this.setState({ messageForm: true })
  },
  cancelSendMessage: function (e) {
    e.preventDefault()
    this.setState({ messageForm: false })
  },
  sendHandler: function (e) {
    e.preventDefault()
    let body = this.refs.body.value
    let recipient = this.props.id
    let sender = store.sessionModel.get('userId')
    store.messageCollection.sendMessage(sender, recipient, body)
    this.setState({ messageSent: true, messageForm: false })
  },
  render: function () {
    let messageForm
    if (this.state.messageForm) {
      messageForm = (
        <form className="messageForm">
          <input
            type="textArea"
            ref="body"
            placeholder="Message..." />
          <input className="send btn"
            type="submit"
            onClick={this.sendHandler} />
          <input className="cancel btn"
            type="submit"
            value="cancel"
            onClick={this.cancelSendMessage} />
        </form>
      )
    }
    return (
      <div className="User_Item"
        data-id={this.props.id}
        data-first_name={this.props.first_name}>
        <img className="avatar"
          src={this.props.avatar} />
        <div className="user_info">
          <h1>{this.props.name}</h1>
          <h2>{this.props.location}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="messageForm"
          onClick={this.showMessageForm}>
            Message
        </div>
          {messageForm}
      </div>
    )
  }
})
