import React from 'react';
import { shorten } from '../../helper/function';
import { Link } from 'react-router-dom';


const Product = ({productData}) => {
    return (
        <div>
            
        <img src={productData.image} style={{width: "200px"}} alt='product' />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
           <Link to={`/products/${productData.id}`}>Details</Link>

            <div>
                <button>Add to cart</button>
            </div>

        </div>


        </div>
    );
};

export default Product;