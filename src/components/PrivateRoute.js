import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;

    const renderRoute = props => {
      if (this.props.isAuthenticated) {
        return <Component {...props} />;
      }

      const to = {
        pathname: '/',
        state: { from: props.location }
      };

      return <Redirect to={to} />;
    };

    return <Route {...rest} render={renderRoute} />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticationStatus.isAuthenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
