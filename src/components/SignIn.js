import React from 'react';
import { connect } from 'react-redux';

import { trySignIn } from '../actions';

class SignIn extends React.Component {
  doSignIn = () => {
    this.props.trySignIn('admin', 'password');
  };

  renderSignInButton() {
    if (this.props.signedIn) {
      return <button onClick={this.doSignOut}>Sign Out</button>;
    }
    return <button onClick={this.doSignIn}>Sign In</button>;
  }

  render() {
    return (
      <div>
        <input onChange={this.onEmailChange} />
        <input onChange={this.onPasswordChange} />
        <div>{this.renderSignInButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    signedIn: state.loggedStatus
  };
};

export default connect(
  mapStateToProps,
  { trySignIn }
)(SignIn);
