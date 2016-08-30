import Backbone from 'backbone'
import messageModel from '../store'
import settings from '../settings'
import moment from 'moment'

export default Backbone.Model.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/MessageCollection`,
  model: messageModel,
  sendMessage: function(sender, recipient, message){
    console.log(sender);
    console.log(recipient);
    console.log(message);
    this.save({
      sender: sender,
      recipient: recipient,
      body: message,
      timestamp: moment().format('MMMM Do YYYY, h:mm')
    },{
      success: (model, response) => {
        console.log('model', model);
        console.log('response', response);
        console.log( 'sender', response.sender);
        console.log( 'recipient', response.recipient);
    }, error: function () {
            console.error ('FAILED TO CREATE NEW MESSAGE', response);
    }});
    },
});
