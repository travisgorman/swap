import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  getInitialState: function(){
    return{
      showModal: true
    }
  },
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:  '#C54A3D'
  },
  contentStyles: {
    background: '#E1675A',
    width: '40%',
    margin: '0 auto',
    height: '75vh',
    marginTop: '9.5%'
  },
  render: function(){
    return (
      
      <div
        className="modal-container"
        style={this.containerStyles}>
        <div
          className="modal-content"
          style={this.contentStyles}>

        </div>
      </div>

    )
  }
});
