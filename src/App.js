import React from 'react';
import SingUp from './component/SingUp';
import Login from './component/Login';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';



const App = () => {
    return (
        <div>

        <Switch>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SingUp} />
        <Redirect from="/" to="/signup" />
        </Switch>


        </div>
    );
};

export default App;