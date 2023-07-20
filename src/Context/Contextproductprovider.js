import React, { useState, useEffect, createContext } from 'react';
import { getProducts } from '../service/api';

export const ProductContext = createContext();

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

      <ProductContext.Provider value={products}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ContextProductProvider; // Make sure to export with capital 'P' as well
