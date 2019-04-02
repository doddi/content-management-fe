import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/signIn" className="item">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
