import Backbone from 'backbone'
import store from '../store'
import settings from '../settings'

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`
})
