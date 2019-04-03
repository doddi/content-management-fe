import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { fetchAuthenticatedUserDetailsOnSign } from '../actions';

class SignIn extends React.Component {
  doSignIn = ({ username, password }) => {
    this.props.fetchAuthenticatedUserDetailsOnSign(username, password);
  };

  renderError({ touched, error }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }

  renderUsername = ({ input, meta }) => {
    const clazz = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={clazz}>
        <label>Username:</label>
        <input
          {...input}
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderPassword = ({ input, meta }) => {
    const clazz = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={clazz}>
        <label>Password:</label>
        <input
          {...input}
          type="password"
          name="password"
          placeholder="password"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    // Once logged in a re-render will initiate this redirect
    if (this.props.signedIn) {
      return <Redirect push to="/" />;
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(this.doSignIn)}
        className="ui form error"
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

const validate = formValues => {
  let errors = {};

  if (!formValues.username) {
    errors.username = 'You must enter a username';
  }
  if (!formValues.password || formValues.password.length < 4) {
    errors.password = 'You must enter a valid password minimum length 4';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'loginForm',
  validate
})(SignIn);

export default connect(
  mapStateToProps,
  { fetchAuthenticatedUserDetailsOnSign }
)(formWrapped);
