import Backbone from 'backbone'
import AssetModel from '../Models/AssetModel'
import settings from '../settings'
import _ from 'underscore'
import $ from 'jquery'

export default Backbone.Collection.extend({  
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`,
  model: AssetModel,
})

  // $.ajax({
  //   url: `https://baas.kinvey.com/appdata/kid_H1NgpLJ9/assetCollection`,
  //   type: 'GET',
  //   data: JSON.stringify({
  //   }),
  //   contentType: 'application/json',
  //   success: function(r) {
  //     console.log('response', r);
  //   },
  //   error: function(e) {
  //     console.error('failed saving:', e)
  //   }
  // })


  // let assets = store.userCollection.getAssets();
  // this.create({
  //     title: assets[0].title,
  //     about: assets[0].about,
  //     img: assets[0].img,
  //     belongsTo: assets[0].belongsTo
  // })
  // $.ajax({
  //   url: `https://baas.kinvey.com/appdata/kid_H1NgpLJ9/assetCollection`,
  //   type: 'POST',
  //   data: JSON.stringify({
  //     title: assets[0].title,
  //     about: assets[0].about,
  //     img: assets[0].img,
  //     belongsTo: assets[0].belongsTo
  //   }),
  //   contentType: 'application/json',
  //   success: function(r) {
  //     console.log('saved success', r);
  //   },
  //   error: function(e) {
  //     console.error('failed saving:', e)
  //   }
  // })
  // assets.forEach((asset) => {
  //   // console.log(asset);
  //   this.create({
  //     title: asset.title,
  //     about: asset.about,
  //     img: asset.img,
  //     belongsTo: asset.belongsTo
  //   }, {
  //     success: function(r) {
  //       console.log('SAVED ASSET: ', r);
  //     },
  //     error: function(e) {
  //       console.error('Failed saving asset: ', e)
  //     }
  //   })
  // })
  // _.each(store.userCollection.getAssets(),(asset) => {
    // this.create({
    //   title: asset.title,
    //   about: asset.about,
    //   img: asset.img,
    //   belongsTo: asset.belongsTo
    // })
  // })
