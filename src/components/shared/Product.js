import React from 'react';
import { shorten } from '../../helper/function';



const Product = ({productData}) => {
    return (
        <div>
            
        <img src={productData.image} style={{width: "200px"}}/>
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <a>details</a>

            <div>
                <button>Add to cart</button>
            </div>

        </div>


        </div>
    );
};

export default Product;