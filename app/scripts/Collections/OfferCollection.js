import Backbone from 'backbone';
import settings from '../settings';
import offerModel from '../store';

export default Backbone.Model.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/offerCollection`,
  model: offerModel,
  makeOffer: function( session, recipient, message ){
    // console.log(session);
    // console.log(recipient);
    // console.log(proposal);
    this.save({
      recipient: recipient,
      sender: { },
      proposal: { },
      timestamp: new Date(),
    },{
      success: (model, response) => {
        console.log('model', model);
        console.log('response', response);
        console.log( response._acl.creator );
    },error: function() {
            console.error( 'FAILED TO CREATE NEW MESSAGE', response);
    }});
    },
});
