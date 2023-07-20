import React, { useState, useEffect, createContext } from 'react';
import { getProducts } from '../service/api';

const ProductContext = createContext(); // Initialize the context with an empty value

const ContextProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      {/* Use the 'ProductContext.Provider' with a capital 'P' */}
      <ProductContext.Provider value={products}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ContextProductProvider; // Make sure to export with capital 'P' as well
