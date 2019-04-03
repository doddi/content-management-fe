import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { trySignOut } from '../actions';

class AuthenticationButton extends React.Component {
  signOut = () => {
    this.props.trySignOut();
  };

  renderButton() {
    if (this.props.isAuthenticated) {
      return (
        <button className="ui button blue" onClick={this.signOut}>
          {this.props.authenticatedUser} sign out
        </button>
      );
    }
    return (
      <Link to="/signIn" className="item">
        <button className="ui button red">Sign In</button>
      </Link>
    );
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const getUserInformation = state => {
  return state.authenticationStatus.user !== undefined
    ? state.authenticationStatus.user.username
    : null;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticationStatus.isAuthenticated,
    authenticatedUser: getUserInformation(state)
  };
};

export default connect(
  mapStateToProps,
  { trySignOut }
)(AuthenticationButton);
