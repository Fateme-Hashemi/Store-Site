import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Login from './components/Login';
import SingUp from './components/SignUp';


const App = () => {
    return (
        <div>
            <Navbar />
            <Banner />


   


        </div>
    );
};

export default App;