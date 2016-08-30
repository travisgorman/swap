import Backbone from 'backbone';
import $ from 'jquery';
import store from '../store';
import settings from '../settings';

export default Backbone.Model.extend({
  urlRoot:`https://baas.kinvey.com/user{settings.appKey}`,
  idAttribute: '_id',
  defaults: {
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    skills: [],
  },
  parse: function( response ) {
  const sender = response._id
//   console.log(sender);
//
//    if ( response ) {
//      return {
//       idAttribute: response._id,
//       id: response._id,
//       username: response.username,
//       authtoken: response._kmd.authtoken,
//       userphoto: response.userphoto,
//       location: response.location,
//       link: response.link,
//       skills: response.skills,
//       description: response.description
//      };
// return s
//    }
//     console.log(response._id);
  return response._id
 }
});
