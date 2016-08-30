import Backbone from 'backbone';
import store from '../store';

export default Backbone.Model.extend({
  idAttribute : `_id`,
    defaults: {
      sender: '',
      senderId: '',
      recipient: '',
      body: '',
    },
});
