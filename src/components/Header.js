import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationButton from './AuthenticationButton';

const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        ContentManagement
      </Link>
      <div className="right menu">
        <Link to="/customers" className="item">
          Customers
        </Link>
        <AuthenticationButton />
      </div>
    </div>
  );
};

export default Header;
