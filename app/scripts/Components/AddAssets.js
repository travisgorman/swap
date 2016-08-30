import React from 'react';
import Backbone from 'backbone';
import { hashHistory, Link } from 'react-router';
import store from '../store';
import AddAsset from './AddAsset'
import AssetCollection from '../Collections/AssetCollection';


export default React.createClass({
  getInitialState(){
    return {};
  },
  handler(e){
    // let assets = store.userCollection.getAssets()
    // this.setState({allAssets: assets})
    // store.assetCollection.saveAssets(assets)
    // console.log( 'called saveAssets from AddAssets', e );
  },
  updateState(){
    this.setState(store.assetCollection.toJSON());
  },
  componentDidMount(){
    store.assetCollection.on('change', this.updateState);
  },
  componentDidUpdate(){
    // console.log('this.state — ', this.state);
    // store.assetCollection.saveAssets(this.state.allAssets)
  },
  componentWillUnmount(){
    store.assetCollection.off('change', this.updateState);
  },
  render: function () {
    return(
      <section className="addAssets">
        <button onClick={this.handler}>get assets</button>
        <AddAsset ref="asset-1" />
        <AddAsset ref="asset-2" />
        <AddAsset ref="asset-3" />
        <AddAsset ref="asset-4" />
      </section>
    )
  }
});
