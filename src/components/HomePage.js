import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductContextProvider from "../Context/ProductContextProvider";
import Store from './Store';
const HomePage = () => {
    return (
        <div>
                <Navbar />
                <Banner />
                <ProductContextProvider>
        <Store />
      </ProductContextProvider>
        </div>
    );
};

export default HomePage;