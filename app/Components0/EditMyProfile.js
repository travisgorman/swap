import React from 'react';
import store from '../store';
import Header from './Header';

export default React.createClass({
  getInitialState: function () {
    return  store.sessionModel.toJSON();
  },
  componentDidMount: function () {
    store.sessionModel.on('change', this.updateState);
  },
  componentWillUnmount: function () {
    store.sessionModel.off('change', this.updateState);
  },
  updateState: function () {
    this.setState(store.sessionModel.toJSON());
  },
  submitHandler: function (e) {
    e.preventDefault();

    let userValues = {
      location: this.refs.location.value,
      link: this.refs.link.value,
      description: this.refs.description.value,
      skills: this.refs.skills.value
    }
    store.sessionModel.save( userValues );
    // console.log( userValues )
  },
  render: function () {
    console.log( this.state );
    return (
      <div>
      <Header/>
      <form
        className="myProfile"
        onSubmit={this.submitHandler}>

        <fieldset className="photo">
          <img
            src="http://i.imgur.com/c6PPaWT.png"
            alt="user profile photo"/>
        </fieldset>

        <fieldset className="info">
          <h3>User Info</h3>
          <ul>
            <li>
              <input
                ref="location"
                type="text"
                defaultValue={this.state.location}
                placeholder="location"
              />
            </li>
            <li>
              <input
                ref="link"
                type="text"
                defaultValue={this.state.link}
                placeholder="social media link"
              />
            </li>
          </ul>
        </fieldset>

        <fieldset
          className="skills">
          <h3>Skills</h3>
            <input
              ref="skills"
              type="text"
              defaultValue={this.state.skills}
              placeholder="skills"
            />
        </fieldset>

        <fieldset
          className="description">
          <h3>Description</h3>
          <input
            ref="description"
            type="textarea"
            defaultValue={this.state.description}
            placeholder="description/bio"
          />
        </fieldset>

          <input
            ref="submit"
            type="submit"
            value="save"
          />

      </form>
      </div>
    )
  }

});
