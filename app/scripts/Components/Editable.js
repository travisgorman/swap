import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {html: <b>Hello <i>World</i></b>};
  },

  handleChange: function(evt){
    this.setState({html: evt.target.value});
  },

  render: function(){
    return <ContentEditable
              html={this.state.html}
              disabled={false}
              onChange={this.handleChange}
            />
  }
});
