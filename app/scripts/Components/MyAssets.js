import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import store from '../store';
import settings from '../settings';
import Editable from './Editable';

export default React.createClass({
  getInitialState: function() {
    return {}
  },
  componentDidMount: function () {
    store.assetCollection.on('change', this.updateState);
    console.log(this.state);
  },
  componentDidUpdate: function () {
    console.log(this.state);
    this.state.filter( asset => {
      asset.belongsTo === store.sessionModel.get('id')
    })
  },
  componentWillUnmount: function () {
    store.assetCollection.off('change', this.updateState);
  },
  updateState: function () {
    this.setState(store.assetCollection.toJSON());
  },
  poke: function () {
    $.ajax({
      type:'GET',
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`,
      success: (data) => {
        console.log(data);
        this.setState(
          data.filter( (a) => {
            a.belongsTo === store.sessionModel.get('userId')
          })
        )
      }
    })
  },
  wizz: function () {
    console.log(this.state);
  },
  componentDidMount: function() {
  console.log(this.state);
    store.assetCollection.fetch();
    store.assetCollection
      .on('update change', () => {
        this.setState({
          users: store.assetCollection.toJSON()
        });
      });
  },
    render: function() {
      return (
        <section>
      4 assets, coming right up...
      <button onClick={this.poke} > </button>
      </section>
      )
  }
})
