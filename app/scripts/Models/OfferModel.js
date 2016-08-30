import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    sender: {
      id: '',
      name: '',
      location: '',
      socialLink: ''
    },
    recepient: {
      id: '',
      name: ''
    },
    swapMy: {
      id: '',
      title: '',
      description: '',
      photo: ''
    },
    forYour: {
      id: '',
      title: ''
    }
  }
})
