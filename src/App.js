import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import ProductDetails from './components/ProductDetails';
import HomePage from './components/HomePage';


const App = () => {
    return (
      <div>
    
         


   



      <Switch>
          <Route path="/loginpage" component={Loginpage} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect  from="/products" to="/products/:id"  />
          <Route path="/" component={HomePage} />
          </Switch>
      </div>

    );
};

export default App;