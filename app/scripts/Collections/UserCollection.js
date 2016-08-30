import Backbone from 'backbone';
import UserModel from '../Models/UserModel';
import underscore from 'underscore';
import store from '../store';

export default Backbone.Collection.extend({
  model: UserModel,
  url: 'https://baas.kinvey.com/user/kid_H1NgpLJ9',
  searchLocationAndSkill: function( searchLocation, searchSkill ){
      this.fetch({
        data: {query: JSON.stringify({
          location: searchLocation,
          skills: {
          }
        })}
      })
  },
  browseCity: function(searchLocation){
      this.fetch({
        data: {
          query: JSON.stringify({
            city: searchLocation
            })
        }
      })
  },
  getAssets: function () {
    let allAssets = []
    this.fetch({
      success: function (model, response) {
        response.forEach((user) => {
          let belongsTo = user._id;
          return user.assets.forEach((asset) => {
            asset.belongsTo = belongsTo;
            allAssets.push(asset)
          })
        })
      }
    })
    return allAssets;
  },

});
