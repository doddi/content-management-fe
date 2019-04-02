import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './SignIn';
import CustomerList from './CustomerList';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={null} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/customers" component={CustomerList} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
