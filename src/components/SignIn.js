import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { trySignIn } from '../actions';

class SignIn extends React.Component {
  doSignIn = () => {
    this.props.trySignIn('admin', 'password');
  };

  render() {
    // Once logged in a re-render to redirect
    if (this.props.signedIn) {
      return <Redirect push to="/" />;
    }

    return (
      <div>
        <input onChange={this.onEmailChange} />
        <input onChange={this.onPasswordChange} />
        <button onClick={this.doSignIn}>Sign In</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.authenticationStatus.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { trySignIn }
)(SignIn);
