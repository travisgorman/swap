import React from 'react'
import $ from 'jquery'
import store from '../store'
import _ from 'underscore'
import settings from '../settings'
import Message from './Message'

export default React.createClass({
  getInitialState: function () {
    return {allMessages:[]}
  },
  componentDidMount: function () {
    $.ajax({
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/MessageCollection`,
      success: (data) => {
        this.setState({ allMessages: data })
      }
    })
  },
  render: function () {
    let messageObj= this.state;
    let messageArr= this.state.allMessages;
    let myMessages= messageArr.filter(message => {
      return message.recipient ===
      store.sessionModel.get('_id')
    })
    let myMessageList = myMessages
      .map((message, i) => {
        return (
          <Message
            key={i}
            sender={message.sender}
            timestamp={message.timestamp}
            body={message.body} />
        )
    })
    return (
      <div className="modOuter">
        <section className="modInner">
          <p>Your Inbox</p>
          <main>
            {myMessageList}
          </main>
        </section>
        <main className="modInner">
        </main>
      </div>
    )
  }
})
