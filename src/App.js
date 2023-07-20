import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import ProductDetails from './components/ProductDetails';
import HomePage from './components/HomePage';
import Store from './components/Store';
import Loginpage from './components/Login';
import Login from './components/Login';
import SingUp from './components/SignUp';

const App = () => {
    return (
      <div>
    
         


   



      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SingUp} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect  from="/products" to="/products/:id"  />
          <Route path="/" component={HomePage} />
          </Switch>
      </div>

    );
};

export default App;