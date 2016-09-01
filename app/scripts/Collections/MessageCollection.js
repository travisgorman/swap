import Backbone from 'backbone'
import settings from '../settings'
import MessageModel from '../Models/MessageModel'
// import moment from 'moment'

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/MessageCollection`,
  model: MessageModel,
  sendMessage: function (sender, recipient, body) {
    this.save({
      sender: sender,
      recipient: recipient,
      body: body,
      timestamp: new Date()
    }, {
      success: (model, response) => {
        console.log('model', model)
        console.log('response', response)
        console.log('sender', response.sender)
        console.log('recipient', response.recipient)
      }, error: function () {
        console.error('MESSAGE FAILED: did NOT send message')
      }})
  }
})
// return new Promise((resolve, reject) => {
//   this.fetch({
//   data: {query: JSON.stringify({
//     $or: [
//       {city: what},
//       {location: what}
//         ]
//       })
//     }
//   })
// })

// {sendMessage}

// this.create({
//   {
//     sender: sender,
//     recipient: recipient,
//     body: body,
//     timestamp: new Date()
//   }, {
//     success: function (model, success) => {
//
//     },
//     error: function () {
//       console.error('ERROR- FAILED to create message', response)
//     }
//   }
// })
//
// // {receiveMessages}
// let forME = JSON.stringify({recipient:store.sessionModel.get('_id')})
// return new Promise ((resolve, reject) => {
//   this.fetch({
//     url:`https://baas.kinvey.com/appdata/${settings/appKey}/MessagesCollection?query=${forMe}`,
//     success: (response)
//   }, error: function (response){
//     console.error('FAILED to fetch messages', response)
//   })
// })
// //
//
