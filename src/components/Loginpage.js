import React from 'react';
import {Route, Switch} from "react-router-dom";
import SingUp from './SignUp';
import Login from './Login';



const Loginpage = () => {
    return (
        <div>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SingUp} />
        {/* <Redirect from="/" to="/signup" /> */}
        </Switch>
      
        </div>
    );
};

export default Loginpage;