import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Loginpage from './components/Loginpage';
import Store from './components/Store';
//API 
import ContextProductProvider from './Context/Contextproductprovider';


const App = () => {
    return (
      <div>
       <Navbar />
      <Banner />
         


      <ContextProductProvider>
        <Store />
      </ContextProductProvider>



      <Switch>
          <Route path="/loginpage" component={Loginpage} />
      </Switch>
      </div>

    );
};

export default App;