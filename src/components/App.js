import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import SignIn from './SignIn';
import Home from './Home';
import CustomerList from './CustomerList';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signIn" component={SignIn} />
          <PrivateRoute path="/customers" component={CustomerList} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
