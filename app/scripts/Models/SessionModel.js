import Backbone from 'backbone';
import settings from '../settings';
import router from '../router';
import { browserHistory } from 'react-router';
import store from '../store';
import $ from 'jquery';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: '',
  },
  parse: function(response) {
    if (response) {
      console.log(response);
      return {
        // _id: response._id,
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id,
        name: response.name,
        first_name: response.first_name,
        last_name: response.last_name,
        location: response.location,
        avatar: response.avatar,
        city: response.city,
        state: response.state,
        social: response.social,
        assets: response.assets
      };
    }
  },
login: function (username, password) {
  console.log(username)
  console.log(password)
  this.save({
      username: username,
      password: password,
    },{
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
      success: (model, response) => {
        // console.log('this', this);
        // console.log('settings.appKey', settings.appKey);
        // console.log('model ', model);
        // console.log('response ', response);
        this.unset('password');
        localStorage.setItem('authtoken', response._kmd.authtoken);
      // router.navigate('/app', {trigger: true});
        browserHistory.push('/app');
    },
      error: function() {
        console.log('it errored, you did not login a user');
      }
    });
  },
  logout: function(){
   this.clear();
   console.log('logout on session');
   this.save(null, {
     url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
     success: (model, response) => {
      model.clear();
      localStorage.clear();
      this.trigger('change');
      console.log('USER LOGGED OUT!');
      browserHistory.push('/')
     },
      error: function(model, response) {
        throw new Error('LOGOUT FAILED');
     },
   });
 },
  retrieve: function() {
    this.fetch({
      url: `https://baas.kinvey.com/user/${settings.appKey}/_me`,
      success: (model, response) => {
        console.log('USER RETRIEVED: ', this);
      }
    });
  },
  signup: function(data) {
    console.log(data);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/kid_H1NgpLJ9`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (s) =>{
        this.set(this.parse(s));
      localStorage.setItem('authtoken', s._kmd.authtoken);
        this.unset('password');
      }
    });
  }
});
