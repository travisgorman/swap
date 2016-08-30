import Backbone from 'backbone'
import assetModel from '../store'
import settings from '../settings'
import store from '../store'

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`,
  model: assetModel,
  assetHandler: function (title, about, img, me) {
    this.create({
      title: title,
      about: about,
      img: img,
      me: store.sessionModel.get('userId')
    },{
      success: function () {
        console.log('SUCCESS! you added an asset to the collection');
      },
      error: function () {
        console.log('FAIL');
      }
    })
  },
  saveAssets: function( assets ) {
    assets.forEach( (asset) => {
      this.create({
        title: asset.title,
        about: asset.about,
        img: asset.img,
        belongsTo: asset.belongsTo
      })
    })
  }
})
