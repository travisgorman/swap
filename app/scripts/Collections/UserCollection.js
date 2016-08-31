import Backbone from 'backbone'
import UserModel from '../Models/UserModel'
import store from '../store'
// import _ from 'underscore'
// import $ from 'jquery'
// import settings from '../settings'

export default Backbone.Collection.extend({
  model: UserModel,
  url: 'https://baas.kinvey.com/user/kid_H1NgpLJ9',
  findUser: (who) => {
    return new Promise((resolve, reject) => {
      store.userCollection.fetch({
        data: {
          query: JSON.stringify({
            username: who
          })
        },
        success: (response) =>
          resolve(response),
        error: (response) => {
          console.error('FAILED TO FETCH USERS ', response)
          reject(response)
        }
      })
    })
  },
  findInCity: (what) => {
    console.log(what, 'recieved by findInCity()')
    return new Promise((resolve, reject) => {
      store.userCollection.fetch({
        data: {
          query: JSON.stringify({
            city: what
          })
        },
        success: (response) => {
          resolve(response)
        },
        error: (response) => {
          console.error('FAILED TO FETCH USERS ', response)
          reject(response)
        }
      })
    })
  },
  getAssets: function () {
    return new Promise((resolve, reject) => {
      let allAssets = []
      this.fetch({
        success: function (model, response) {
          response.forEach((user) => {
            let belongsTo = user._id
            return user.assets.forEach((asset) => {
              asset.belongsTo = belongsTo
              allAssets.push(asset)
            })
          })
          resolve(allAssets)
        }
      })
    })
  }
})

// {searchHandler}

// e.preventDefault();
// $.ajax({
//   url:'https://baas.kinvey.com/user/kid_H1NgpLJ9'
//   success: function(model, response) {
//     console.log( response )
//     let searchLocation = this.refs.location.value;
//     let searchSkill = this.refs.skill.value;
//     let search = response.users
//     .filter( (user) => {
//       return ( user.location === searchLocation &&
//         _.contains(user.skills, searchSkill))
//     })
//   }
//   this.setState({users:search})    });
