import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        ContentManagement
      </Link>
      <div className="right menu">
        <Link to="/signIn" className="item">
          Home
        </Link>
        <Link to="/customers" className="item">
          Customers
        </Link>
      </div>
    </div>
  );
};

export default Header;
