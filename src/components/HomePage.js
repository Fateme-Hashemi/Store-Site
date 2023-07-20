import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ContextProductProvider from '../Context/Contextproductprovider';
import Store from './Store';
const HomePage = () => {
    return (
        <div>
                <Navbar />
                <Banner />
                <ContextProductProvider>
        <Store />
      </ContextProductProvider>
        </div>
    );
};

export default HomePage;