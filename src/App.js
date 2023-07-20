import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Loginpage from './components/Loginpage';
//API 
import ContextProductProvider from './Context/Contextproductprovider';


const App = () => {
    return (
 <ContextProductProvider>

            <Navbar />
            <Banner />
        

   <Switch>
    <Route path="/loginpage" component={Loginpage} />
    {/* <Redirect from="/" to="/loginpage" /> */}
   </Switch>


    
 </ContextProductProvider>
    );
};

export default App;