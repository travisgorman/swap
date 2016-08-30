import Backbone from 'backbone';
import store from '../store';
import settings from '../settings';

export default Backbone.Model.extend({
  idAttribute: '_id',
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: '',
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    location: '',
    socialLink: [],
    skills: [],
    description: ''
  }
});
