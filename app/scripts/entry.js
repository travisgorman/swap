import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import router from './router'
import store from './store'
import settings from './settings'

$(document).ajaxSend(function (evt, xhr, jquerySettings) {
  if (window.localStorage.getItem('authtoken')) {
    xhr.setRequestHeader('Authorization', 'Kinvey ' + window.localStorage.getItem('authtoken'))
  } else {
    xhr.setRequestHeader('Authorization', settings.basicAuth)
  }
})
if (window.localStorage.authtoken) {
  store.sessionModel.retrieve()
}
// store.userCollection.getAssets()
// .then((assets) => {store.assetCollection.saveAssets(assets)})
// console.log(assets);
ReactDOM.render(router, document.getElementById('page'))
