import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { trySignIn } from '../actions';

class SignIn extends React.Component {
  doSignIn = ({ username, password }) => {
    this.props.trySignIn(username, password);
  };

  renderUsername(formProps) {
    return (
      <div className="field">
        <label>Username:</label>
        <input
          {...formProps.input}
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
    );
  }

  renderPassword(formProps) {
    return (
      <div className="field">
        <label>Password:</label>
        <input
          {...formProps.input}
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
    );
  }

  render() {
    // Once logged in a re-render will initiate this redirect
    if (this.props.signedIn) {
      return <Redirect push to="/" />;
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(this.doSignIn)}
        className="ui form"
      >
        <div>
          <Field name="username" component={this.renderUsername} />
          <Field name="password" component={this.renderPassword} />
          <div className="field" />
          <button className="ui button primary" type="submit">
            Sign In
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.authenticationStatus.isAuthenticated
  };
};

export default reduxForm({
  form: 'loginForm'
})(
  connect(
    mapStateToProps,
    { trySignIn }
  )(SignIn)
);
