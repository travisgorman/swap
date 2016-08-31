import Backbone from 'backbone';
import store from '../store';
import settings from '../settings';

export default Backbone.Model.extend({
  idAttribute: '_id',
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: '',
    avatar: 'http://i.imgur.com/c6PPaWT.png',
    location: '',
    social: [],
    assets: [],
    description: ''
  }
});
